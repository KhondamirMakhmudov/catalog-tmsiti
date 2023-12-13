import React from "react";
import Dashboard from "../../../layouts/dashboard";
import Subheader from "../../../layouts/dashboard/components/subheader";

const Index = () => {
  return (
    <Dashboard>
      <Subheader title={"Kompaniya haqida"} />
      <div className="p-7">
        <div className={" flex gap-x-[30px] mb-[50px]"}>
          <div className={" min-w-[250px]  "}>
            <img
              className={"w-[240px] h-[170px] object-cover"}
              src={"/images/company.png"}
            />
          </div>

          <div className={""}>
            {/*  Company name */}
            <h1 className={"text-base font-normal text-black mb-[15px]"}>
              <strong>“Qizilqumsement” aksiyadorlik jamiyati</strong>
            </h1>
            {/*  Company description */}
            <p className={"text-xs text-black mb-[10px]"}>
              Korxonaning tarmoqdagi va bozordagi holati tahlili bu o’z
              mohiyatiga ko’ra tashqi muhit diagnostikasidir. U biznes-rejani
              tayyorlashda rezyumedan keyingi ikkinchi qadamdir. Biznes-reja
              tuzish bo’yicha bugungi uslubiy tavsiyalar ushbu bo’limni mazkur
              korxona faoliyat ko’rsatuvchi muhitning investitsiyalarni jalb
              qilishdagi jozibadorligini tahlil qilishdan boshlashni taklif
              qiladi.
            </p>
            {/*  Company manager  */}
            <p className={"text-xs text-black"}>
              <strong>Rahbar: </strong>Melnikov Sergey Nikolayevich
            </p>

            {/*  Company phone  */}
            <p className={"text-xs text-black my-[6px]"}>
              <strong>Telefon: </strong>79-2236490
            </p>

            {/*  Company address  */}
            <p className={"text-xs text-black"}>
              <strong>Manzil: </strong>Navoiy viloyati, Navoiy sh., Navoiy
              ko‘chasi, 3-uy
            </p>
            <button
              className={
                "flex items-center gap-x-[10px] bg-[#1890FF] py-[6px] px-[31px] rounded-[5px] float-right hover:bg-[#0084FF] transition-all duration-300"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_1_212)">
                  <path
                    d="M7.49967 5.83331H4.99967C4.55765 5.83331 4.13372 6.00891 3.82116 6.32147C3.5086 6.63403 3.33301 7.05795 3.33301 7.49998V15C3.33301 15.442 3.5086 15.8659 3.82116 16.1785C4.13372 16.4911 4.55765 16.6666 4.99967 16.6666H12.4997C12.9417 16.6666 13.3656 16.4911 13.6782 16.1785C13.9907 15.8659 14.1663 15.442 14.1663 15V12.5"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 12.5H10L17.0833 5.41669C17.4149 5.08517 17.6011 4.63553 17.6011 4.16669C17.6011 3.69785 17.4149 3.24821 17.0833 2.91669C16.7518 2.58517 16.3022 2.39893 15.8333 2.39893C15.3645 2.39893 14.9149 2.58517 14.5833 2.91669L7.5 10V12.5Z"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.333 4.16669L15.833 6.66669"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_212">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className={"text-white"}>Tahrirlash</p>
            </button>
          </div>
        </div>
        <p className={"text-sm text-[#c5c5c5]"}>*Quyidagi ma'lumotlar korxonaning STIR orqali yuklab olingan</p>
        <section
          className={
            " p-[10px] bg-white grid grid-cols-12 "
          }
        >
          <div
            className={
              "col-span-5 text-xs text-black flex flex-col gap-y-[20px]"
            }
          >
            <p className={""}>
              <strong>Tashkil etilgan kuni:</strong>
            </p>

            <p className={""}>
              <strong>Ro‘yhatdan o‘tgan organ:</strong>
            </p>

            <p className={""}>
              <strong>THSHT ma’lumotlari:</strong>
            </p>

            <p className={""}>
              <strong>DBIBT ma’lumotlari:</strong>
            </p>

            <p className={""}>
              <strong>IFUT ma’lumotlari:</strong>
            </p>

            <p className={""}>
              <strong>Joylashgan viloyat:</strong>
            </p>

            <p className={""}>
              <strong>Joylashgan tuman/shahar:</strong>
            </p>

            <p className={""}>
              <strong>To‘liq manzili:</strong>
            </p>

            <p className={""}>
              <strong>Elektron pochta:</strong>
            </p>

            <p className={""}>
              <strong>Qo’shimcha telefon raqami:</strong>
            </p>

            <p className={""}>
              <strong>Ustav fondi:</strong>
            </p>

            <p className={""}>
              <strong>Holati:</strong>
            </p>

            <p className={""}>
              <strong>Rahbar:</strong>
            </p>

            <p className={""}>
              <strong>Kompaniya sahifasining ko’rishlar soni:</strong>
            </p>

            <p className={""}>
              <strong>Kompaniya sahifasining saqlashlar soni:</strong>
            </p>
          </div>

          <div
            className={
              "col-span-5 text-xs text-black flex flex-col gap-y-[20px]"
            }
          >
            <p>24.03.1997</p>
            <p>Viloyat adliya boshqarmasi</p>
            <p>153 - Aksiyadorlik jamiyati</p>
            <p>07154 - “O‘zqurilishmateriallari” aksiyadorlik kompaniyasi</p>
            <p>23510 - TSement ishlab chiqarish</p>
            <p>Berilmagan</p>
            <p>Berilmagan</p>
            <p>Navoiy viloyati, Navoiy sh., Navoiy ko‘chasi, 3-uy</p>
            <p>info@qizilqumsement.uz</p>
            <p>79-2236490</p>
            <p>702 601 533 000,00 UZS</p>
            <p>Hozirda mavjud</p>
            <p>Melnikov Sergey Nikolayevich</p>
            <p>0</p>
            <p>10</p>
          </div>
        </section>

        <div className={"mb-[268px]"}>
          <button
              className={
                "flex items-center gap-x-[10px] bg-[#1890FF] py-[6px] px-[31px] rounded-[5px] float-left mt-[30px] hover:bg-[#0084FF] transition-all duration-300 "
              }
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
            >
              <g clipPath="url(#clip0_1_212)">
                <path
                    d="M7.49967 5.83331H4.99967C4.55765 5.83331 4.13372 6.00891 3.82116 6.32147C3.5086 6.63403 3.33301 7.05795 3.33301 7.49998V15C3.33301 15.442 3.5086 15.8659 3.82116 16.1785C4.13372 16.4911 4.55765 16.6666 4.99967 16.6666H12.4997C12.9417 16.6666 13.3656 16.4911 13.6782 16.1785C13.9907 15.8659 14.1663 15.442 14.1663 15V12.5"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7.5 12.5H10L17.0833 5.41669C17.4149 5.08517 17.6011 4.63553 17.6011 4.16669C17.6011 3.69785 17.4149 3.24821 17.0833 2.91669C16.7518 2.58517 16.3022 2.39893 15.8333 2.39893C15.3645 2.39893 14.9149 2.58517 14.5833 2.91669L7.5 10V12.5Z"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M13.333 4.16669L15.833 6.66669"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_212">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className={"text-white"}>Tahrirlash</p>
          </button>
        </div>
      </div>
    </Dashboard>
  );
};

export default Index;
