import React, { useState } from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Section from "@/components/section";
import { useRouter } from "next/router";
import ErrorPage from "@/pages/500";
import { ContentLoader } from "@/components/loader";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import Image from "next/image";
import { get, split, round, isEmpty, isNil } from "lodash";
import GridView from "@/containers/grid-view";
import { NumericFormat } from "react-number-format";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Title from "@/components/title";
import Link from "next/link";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
} from "@pbe/react-yandex-maps";

const ViewPage = () => {
  const router = useRouter();
  const { stir } = router.query;
  const { t } = useTranslation();
  const [itemId, setItemId] = useState(null);
  const [count, setCount] = useState(0);
  const {
    data: company,
    isLoading,
    isError,
  } = useGetQuery({
    key: [KEYS.companies, stir],
    url: `${URLS.companies}${stir}/`,
    enabled: !!stir,
  });
  const { data: currency } = useGetQuery({
    key: KEYS.currency,
    url: URLS.currency,
  });

  const columns = [
    {
      title: "№",
      key: "id",
      render: ({ index }) => <span className={"font-semibold"}>{index}</span>,
    },
    {
      title: t("Rasm"),
      key: "material_image",
      render: ({ value }) =>
        value ? (
          <Image
            className={"mx-auto"}
            width={80}
            height={56}
            loader={() => value}
            src={value}
            alt={"logo"}
          />
        ) : (
          <Image
            className={"mx-auto"}
            width={80}
            height={56}
            src={"/images/company.png"}
            alt={"logo"}
          />
        ),
      classnames: "text-center",
    },
    {
      title: t("Resurs turi"),
      key: "material_type",
      render: ({ value, row }) => (
        <Link
          href={`/${get(split(get(row, "material_url"), "/"), "[1]", "#")}`}
          className={"underline text-[#146BBC] "}
        >
          {value}
        </Link>
      ),
      classnames: "text-center",
    },
    {
      title: t("Kodi"),
      key: "material_name",
      render: ({ value, row }) => (
        <Link
          href={get(row, "material_url", "#")}
          className={"underline text-[#146BBC] whitespace-nowrap "}
        >
          {value}
        </Link>
      ),
      classnames: "text-center",
    },
    {
      title: t("E’lon tavsifi"),
      key: "material_description",
      render: ({ value }) => <span>{value}</span>,
    },
    {
      title: t("Sertifikat"),
      key: "sertificate_blank_num",
      render: ({ row }) => (
        <div className={"group relative inline-block cursor-pointer"}>
          <Image
            onClick={() => setItemId(row, "id")}
            className={"mx-auto"}
            width={24}
            height={24}
            src={"/images/certificate.png"}
            alt={"certificate"}
          />
          <ul className="text-left text-white hidden group-hover:block absolute left-full bottom-full p-2.5 bg-[#3D7AB6] w-[200px] rounded shadow-[5px_5px_15px_rgba(0, 0, 0, 0.1)]">
            {get(row, "sertificate_blank_num") &&
            get(row, "sertificate_reestr_num") &&
            get(row, "sertificate_reestr_num")?.length > 1 &&
            get(row, "sertificate_blank_num")?.length > 1 ? (
              <>
                <li>
                  {t("Blank raqami")}: {get(row, "sertificate_blank_num")}
                </li>
                <li>
                  {t("Reestr raqami")}: {get(row, "sertificate_reestr_num")}
                </li>
                <li className={"underline"}>
                  <a
                    target={"_blank"}
                    href={`http://sert2.standart.uz/site/register?Search[number_of_blank]=${get(
                      row,
                      "sertificate_blank_num",
                    )}&Search[gov_register]=${get(
                      row,
                      "sertificate_reestr_num",
                    )}`}
                  >
                    {t("Tekshirish")}
                  </a>
                </li>
              </>
            ) : (
              <li>{t("Ma’lumot mavjud emas")}</li>
            )}
          </ul>
        </div>
      ),
      classnames: "text-center",
    },
    {
      title: t("Narxi(so`m)"),
      key: "material_price",
      render: ({ value, row }) =>
        value *
          get(currency, `data[${get(row, "material_price_currency")}]`, 1) >
        0 ? (
          <abbr
            className={"no-underline"}
            title={`${get(row, "material_price")} ${get(
              row,
              "material_price_currency",
            )}`}
          >
            <NumericFormat
              displayType={"text"}
              className={"text-center bg-transparent"}
              thousandSeparator={" "}
              value={(
                value *
                get(currency, `data[${get(row, "material_price_currency")}]`, 1)
              ).toFixed(2)}
              suffix={` (${get(row, "material_measure")})`}
            />
          </abbr>
        ) : (
          t("by_order")
        ),
      classnames: "text-center  whitespace-nowrap",
      sorter: true,
    },
    {
      title: t("Miqdori"),
      key: "material_amount",
      render: ({ value, row }) => (
        <NumericFormat
          displayType={"text"}
          className={"text-center bg-transparent  whitespace-nowrap"}
          thousandSeparator={" "}
          value={value}
          suffix={` ${get(row, "material_measure")}`}
        />
      ),
      classnames: "text-center",
      sorter: true,
    },
    {
      title: t("Joylangan vaqt"),
      key: "material_created_date",
      render: ({ value }) => dayjs(value).format("DD.MM.YYYY HH:mm"),
      classnames: "text-center",
      sorter: true,
    },
    {
      title: t("Action"),
      key: "action",
      render: () => (
        <div className={"flex items-center"}>
          <Image
            className={"mx-auto cursor-pointer"}
            width={24}
            height={24}
            src={"/images/shopping.png"}
            alt={"certificate"}
          />
          <Image
            className={"mx-auto cursor-pointer"}
            width={24}
            height={24}
            src={"/icons/stick.svg"}
            alt={"certificate"}
          />
        </div>
      ),
      classnames: "text-center",
    },
  ];
  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return (
      <Main>
        <ContentLoader />
      </Main>
    );
  }
  return (
    <>
      <Main>
        <Menu active={1} />
        <Section className={"!bg-white"}>
          <div className="grid grid-cols-12 tablet:gap-x-[30px] gap-y-[30px] tablet:gap-y-0  ">
            <div className="laptop:col-span-2 col-span-12 flex justify-center items-center laptop:justify-start laptop:items-start relative ">
              {get(company, "data.company_logo") ? (
                <Image
                  className={"w-[220px] h-[160px]"}
                  layout={"fill"}
                  objectFit={"contain"}
                  loader={() => get(company, "data.company_logo")}
                  src={get(company, "data.company_logo")}
                  alt={"code"}
                  width={220}
                  height={160}
                />
              ) : (
                <Image
                  className={" w-[220px] h-[160px]"}
                  width={220}
                  height={160}
                  src={"/images/company.png"}
                  alt={"company"}
                />
              )}
            </div>
            <div className="laptop:col-span-7 col-span-12 !ml-0 flex flex-col  laptop:items-start laptop:justify-start items-center justify-center">
              <div className="flex mb-2.5">
                <div
                  className={"inline-flex mr-[10px] cursor-pointer text-center"}
                >
                  <Image
                    className={
                      "laptop:mr-1.5 tablet:mr-1 mr-0.5 tablet:w-[20px] tablet:h-[20px] laptop:w-[24px] laptop:h-[24px] w-[18px] h-[18px]"
                    }
                    width={24}
                    height={24}
                    src={"/icons/stick.svg"}
                    alt={"code"}
                  />
                </div>
                <h2
                  className={
                    "text-[#212529] laptop:text-base tablet:text-sm text-xs font-medium "
                  }
                >
                  {get(company, "data.company_name")}
                </h2>
              </div>

              <div className="flex flex-col laptop:items-start items-center mt-2.5">
                <div
                  className={
                    "mb-[10px] laptop:text-base tablet:text-sm text-xs  text-[#4B5055]"
                  }
                >
                  <strong className={"text-[#000]"}>{t("Rahbar")}:</strong>{" "}
                  {get(company, "data.company_ceo")}
                </div>

                {get(company, "data.company_email", "-") ? (
                  <div
                    className={
                      "mb-[10px] text-[#4B5055] laptop:text-base text-sm"
                    }
                  >
                    <strong className={"text-[#000]"}>
                      {t("Elektron-pochta")}:
                    </strong>{" "}
                    {get(company, "data.company_email", "-")}
                  </div>
                ) : (
                  ""
                )}
                {get(company, "data.company_phone_main", "-") ? (
                  <div
                    className={
                      "mb-[10px] text-[#4B5055] laptop:text-base tablet:text-sm text-xs"
                    }
                  >
                    <strong className={"text-[#000]"}>{t("Telefon")}:</strong>{" "}
                    {get(company, "company_phone_main", "-")}
                  </div>
                ) : (
                  <div
                    className={
                      "mb-[10px] text-[#4B5055] laptop:text-base tablet:text-sm text-xs"
                    }
                  >
                    <p>
                      {" "}
                      <strong className={"text-[#000]"}>
                        {t("Telefon")}:{" "}
                      </strong>{" "}
                      -
                    </p>
                  </div>
                )}
                {get(company, "data.company_address", "-") ? (
                  <div
                    className={
                      "mb-[10px] text-[#4B5055] laptop:text-base tablet:text-sm text-xs"
                    }
                  >
                    <strong className={"text-[#000]"}>{t("Manzil")}:</strong>{" "}
                    {get(company, "company_phone_main", "-")}
                  </div>
                ) : (
                  <div
                    className={
                      "mb-[10px] text-[#4B5055] laptop:text-base tablet:text-sm text-xs"
                    }
                  >
                    <p>
                      {" "}
                      <strong className={"text-[#000]"}>
                        {t("Manzil")}:{" "}
                      </strong>{" "}
                      -
                    </p>
                  </div>
                )}

                {/*<div*/}
                {/*  className={*/}
                {/*    "mb-[10px] text-[#4B5055] laptop:text-base text-sm"*/}
                {/*  }*/}
                {/*>*/}
                {/*  <strong className={"text-[#000] "}>{t("Telefon")}:</strong>{" "}*/}
                {/*  {get(company, "data.company_phone_main", "-")}*/}
                {/*</div>*/}
                {/*<div className={"text-[#4B5055] laptop:text-base text-sm"}>*/}
                {/*  <strong className={"text-[#000] "}>{t("Manzil")}:</strong>{" "}*/}
                {/*  {get(company, "data.company_address", "-")}*/}
                {/*</div>*/}
              </div>
            </div>

            <div className={"laptop:col-span-3 col-span-12"}>
              {isNil(get(company, "data.company_latitude")) ? (
                <div
                  className={
                    "flex laptop:items-start laptop:justify-start gap-x-[10px] items-center justify-center  shadow-md p-[10px]"
                  }
                >
                  <Image
                    src={"/icons/error.svg"}
                    alt={"error"}
                    width={30}
                    height={30}
                  />
                  <div>
                    <h4 className={"text-base text-black"}>
                      Hozircha koordinata topilmadi
                    </h4>
                    <p className={"text-xs"}>
                      Tez fursatda Geojoylashuv bo'yicha ma'lumot kiritiladi
                    </p>
                  </div>
                </div>
              ) : (
                <div className={"shadow-lg"}>
                  <YMaps>
                    <Map
                      defaultState={{
                        center: [
                          get(company, "data.company_latitude"),
                          get(company, "data.company_longitude"),
                        ],
                        zoom: 9,
                      }}
                      height={160}
                      className={"tablet:h-[160px] h-[100px]"}
                    >
                      <Placemark
                        defaultGeometry={[
                          get(company, "data.company_latitude"),
                          get(company, "data.company_longitude"),
                        ]}
                      />
                      <FullscreenControl />
                    </Map>
                  </YMaps>
                </div>
              )}
            </div>
          </div>
        </Section>
        <Section>
          <div className="grid grid-cols-12">
            <div className="col-span-12 ">
              <GridView
                HeaderBody={
                  <div className={"mb-5"}>
                    <Title classNames={"!mb-2.5"}>
                      Korxonaning bARCHA TAKLIFLARI
                    </Title>
                    <p className={"text-sm text-[#4B5055]"}>
                      <NumericFormat
                        value={count}
                        displayType={"text"}
                        thousandSeparator={" "}
                      />{" "}
                      e’lon mavjud
                    </p>
                  </div>
                }
                url={`${URLS.companyAds}${stir}/`}
                key={KEYS.companyAds}
                columns={columns}
                getCount={setCount}
              />
            </div>
          </div>
        </Section>

        <div
          className={`fixed inset-0 bg-black z-50 bg-opacity-70 flex justify-center items-center ${
            isNil(itemId) ? "hidden" : "visible"
          }`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={"w-[700px]  "}
          >
            <div className={""}>
              <Image
                onClick={() => setItemId(null)}
                src={"/icons/closeModal.svg"}
                alt={"modalcloser"}
                width={24}
                height={24}
                className={
                  "float-right block cursor-pointer bg-white p-1 rounded-[2px]"
                }
              />
            </div>
            <br />
            <div className={"flex items-center justify-center"}>
              {get(company, "data.company_name") ===
              '"OHANGARONSEMENT" aksiyadorlik jamiyati' ? (
                <Image
                  src={"/images/ohangaron.jpg"}
                  alt={"sertificat"}
                  width={400}
                  height={200}
                />
              ) : (
                <div
                  className={
                    "w-[350px]  bg-white p-10 rounded-[5px] flex items-center gap-x-[20px]"
                  }
                >
                  <motion.div
                    transition={{ repeat: Infinity, repeatDelay: 0.25 }}
                    animate={{
                      scale: [1, 1, 1, 1, 1],
                      rotate: 360,
                    }}
                  >
                    <Image
                      src={"/images/wait.png"}
                      alt={"wait"}
                      width={120}
                      height={120}
                    />
                  </motion.div>
                  <p
                    className={
                      "text-xl text-center inline-block p-2 border-[1px] border-[#c5c5c5] rounded-[5px] text-black"
                    }
                  >
                    Tez orada bu korxonaning sertifikati taqdim etiladi!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Main>
    </>
  );
};

export default ViewPage;
