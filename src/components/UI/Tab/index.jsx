import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

export default function UnderlineTab() {
    const [activeTab, setActiveTab] = React.useState("html");
    const data = [
        {
            label: "Mahsulot tavsifi",
            value: "Mahsulot tavsifi",
            desc: `Oqish rang - TWS i16
                   Oq - TWS i14
                   Oqish rang- TWS i18
                   Muz rang- TWS i15
                   Shaffof - TWS i11
                   Fil suyagi - TWS i13
                   Och koʻk - TWS i12
                   TWS quloqchinlari simsiz quloqchinlarning munosib va ​​ixcham turidir. Telefoningizni zaryadlash qutisidan chiqarganingizda
avtomatik ravishda sinxronlanadi. Zaryadlovchiga o'rnatilganda avtomatik ravishda zaryadlanadi
Ikki quloqchin birgalikda yoki alohida ishlaydi. i18 simsiz minigarnituralari bir vaqtning o'zida ikkita qurilmaga ulanishi mumkin,
agar kerak bo'lsa, biridan ikkinchisiga o'ting.
Simsiz minigarnituralar ixchamligi va qulayligi uchun yaxshi. Karnaylarga o'rnatilgan mikrofonlar esa ularning o'lchamlarini
oshirmaydi. AirPods tufayli simsiz quloqchinlar odamlar orasida mashhur aksessuarga aylandi. Simsiz minigarnituralar
qurilmalarga Bluetooth orqali ulanadi va juda keng ulanish diapazoniga ega. Odatiy tugmalar o‘rniga mikrofonli Bluetooth
naushniklar sensorli boshqaruv bilan jihozlangan – datchiklar quloqchinlarda joylashgan.`,
        },
        {
            label: "Ko'rsatma",
            value: "Ko'rsatma",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Sharhlar (202)",
            value: "Sharhlar (202)",
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent py-[14px] w-[450px]"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-[#7000FF] py-6 shadow-none rounded-none",
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-[#7000FF]" : ""}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody className="pt-[50px] pb-[30px]">
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}