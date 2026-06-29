// DATABASE GALLERY SERVER YTTA
// Cara Tambah Gambar Baru: Cukup isi URL di dalam tanda kutip "". Jika kosong "" maka otomatis bertuliskan "Coming Soon".
// Gunakan trik otomatis '=w600' di ujung link Google Drive untuk mengompres kecepatan loading preview data.

const playersData = {
    "anozzs": {
        name: "Anozzs",
        role: "PEMDA",
        skin: "Anozzs", // Nama file foto skin di folder player/
        photos: [
            { url: "https://lh3.googleusercontent.com/d/1KaaLkCrmPpVIzsyVBXHFMgb4fogc0NtS", label: "Kantor Polisi", desc: "Menjaga Keamanan Warga YTTA." },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" }
        ]
    },
    "shirokuhimatsu": {
        name: "ShirokuHimatsu",
        role: "RT",
        skin: "ShirokuHimatsu",
        photos: [
            { url: "https://lh3.googleusercontent.com/d/1RJVaV0e9TB-5IA-SLVKQA1UFqplKEegK", label: "Rumah Shiro", desc: "Rumah Sederhana Tempat Tinggal ShirokuHimatsu." },
            { url: "https://lh3.googleusercontent.com/d/1TEbRZJOQ8FsXdZmbPgQqMJi-jR0ooj9W", label: "Zona Parkir Ghast", desc: "Parkiran Untuk Ghast." },
            { url: "https://lh3.googleusercontent.com/d/1YCBoOWhgRox7K_6TmP1qjW2WhJh8Svnh", label: "Storage Room", desc: "Tempat Penyimpan Barang Resource" },
            { url: "https://lh3.googleusercontent.com/d/1lXFEI1LFpQNVzZdV6SOqk6Rwcs80DOAr", label: "Stadium", desc: "A battle-ready arena designed for intense player-versus-player combat. Featuring a balanced layout, strategic obstacles, and an immersive atmosphere, this arena is perfect for testing skills, tactics, and teamwork." },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" }
        ]
    },
    "TakeAll": {
        name: "TakeAll / YeetPotata",
        role: "KULI",
        skin: "TakeAll",
        photos: [
            { url: "https://lh3.googleusercontent.com/d/1IpQE8TXrwhMXqnPu1DbrF-y-O8b0GiP7", label: "Patung Monumen", desc: "Angel" },
            { url: "https://lh3.googleusercontent.com/d/1PVsxPLD7gqUo4rYZSKlhmx_UPoaXarUq", label: "Serenity Pond", desc: "A peaceful little pond where players can rest, fish, and enjoy the scenery." },
            { url: "https://lh3.googleusercontent.com/d/1pomTK7QyCu_MXOmDcH_Hod8ZPsnrKlYI", label: "Rumah Makan Padang", desc: "Restaurant Padang" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" }
        ]
    },
    "DrMurphy30": {
        name: "DrMurphy30",
        role: "KADES",
        skin: "DrMurphy30",
        photos: [
            { url: "https://lh3.googleusercontent.com/d/1ujerqZ0ZbPtRMPnWoSIMEgBGEz5XJgfp", label: "Fire Watch", desc: "Tempat Tinggal Bapak Kades" },
            { url: "https://lh3.googleusercontent.com/d/1aGsjhHHPbzxYJshVSBauB_0B_cSfpH7x", label: "Fountain of Serenity", desc: "Tempat Spawn Player Diindahkan Air Mancur." },
            { url: "https://lh3.googleusercontent.com/d/1e7o7FQ5lgDOYRraO5_VEXDK1lMBkjgJn", label: "Trading Village", desc: "All In One Trading Villager" },
            { url: "https://lh3.googleusercontent.com/d/1lZTIEpyauGnTtrkcNj6oMUCifAVVn03q", label: "Gazebo", desc: "Tempat Rilexs Anjay." },
            { url: "https://lh3.googleusercontent.com/d/1b7vd0ttHm0Q_v-MffPYqbCYWALrc7Wrm", label: "Pond of Silent", desc: "Just listen to the Firefly" },
            { url: "", label: "Coming Soon", desc: "" }
        ]
    },
    "ZED311": {
        name: "ZED311",
        role: "SATPOL",
        skin: "ZED311",
        photos: [
            { url: "https://lh3.googleusercontent.com/d/10VaylA-6JYqhytl_BC9EKXhu8o-zK4tE", label: "Moon Palace", desc: "Tempat Tinggal ZED311." },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" }
        ]
    },
    "Knhuwy6": {
        name: "Knhuwy6",
        role: "KULI",
        skin: "Steve",
        photos: [
            { url: "https://lh3.googleusercontent.com/d/131Wzzctak_AOgls3PaLaNRRBiWqr3vX1", label: "Conference Room", desc: "Tempat Warga Musyawarah dan Pengadilan Rapat" },
            { url: "https://lh3.googleusercontent.com/d/1l91GkH9P9LsfviFrsuC7UvvwFCDyZf73", label: "Secret House", desc: "Rumah Tempat Tinggal Knhuwy6" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" }
        ]
    },
    "YantoTambalBan": {
        name: "YantoTambalBan",
        role: "SATPOL",
        skin: "YantoTambalBan",
        photos: [
            { url: "https://lh3.googleusercontent.com/d/1N9dSlOUSDO4V3mKaFgCbLJks582L1qZm", label: "Yanto Sunrise", desc: "Yanto Sedang Melihat Sunrise" },
            { url: "https://lh3.googleusercontent.com/d/1ob75fODAE46V__qybK3hv-ui3iLllKYZ", label: "Yanto Berenang", desc: "Yanto Sedang Mandi" },
            { url: "https://lh3.googleusercontent.com/d/1r4x_OJlFgYjRefACpMTinHI8_hDx7859", label: "Yanto Menatap", desc: "Yanto Sedang Menatap" },
            { url: "https://lh3.googleusercontent.com/d/1botbIa-vIdBCxil4qgnx2SmiM5DDRodn", label: "Yanto Sedih", desc: "Yanto Mengingat 8 Tahun" },
            { url: "https://lh3.googleusercontent.com/d/1u4knXe_Jjw5FkGwxKNIDAqlje8tezXFR", label: "Yanto Hogrider", desc: "Yanto Menunggang Citer" },
            { url: "", label: "Coming Soon", desc: "" }
        ]
    },
    "Ferclone": {
        name: "Ferclone",
        role: "KULI",
        skin: "Ferclone",
        photos: [
            { url: "https://lh3.googleusercontent.com/d/1ObRp2Dl_7JBVib0ZSw6DZnuIwqlHrn4y", label: "Space Ship", desc: "🚀 A futuristic spaceship built for deep-space exploration. Featuring advanced engines, detailed interiors, and a sleek sci-fi design, this vessel is ready to travel across the stars and discover new worlds." },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" }
        ]
    },
    "RAY97523": {
        name: "RAY97523",
        role: "KULI",
        skin: "Steve",
        photos: [
            { url: "https://lh3.googleusercontent.com/d/1OtSwyrEmaPRRfb1Rx39tjBjVCa5oRMqc", label: "Rumah RAY", desc: "Tempat Tinggal Ray" },
            { url: "https://lh3.googleusercontent.com/d/1wN1RD5SgfoM1Bl8k2vhKJVk1Mm29Fwgg", label: "KitaNet", desc: "Mabar Kuy YAHAHAHA" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" }
        ]
    },
    "Abidrajaibls": {
        name: "Abidrajaibls",
        role: "WARGA",
        skin: "Steve",
        photos: [
            { url: "https://lh3.googleusercontent.com/d/1aeRbCcJqQGunCSij_eZ0WOoDRA_Lfy5_", label: "Small Vilalge", desc: "A cozy small village featuring charming houses, peaceful paths, and a welcoming atmosphere. Perfect for survival gameplay, roleplay, or building a thriving community in Minecraft." },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" }
        ]
    },
    "Steve3": {
        name: "UNKNOWN",
        role: "KULI",
        skin: "Steve",
        photos: [
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" }
        ]
    },
    "Steve4": {
        name: "UNKNOWN",
        role: "KULI",
        skin: "Steve",
        photos: [
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" },
            { url: "", label: "Coming Soon", desc: "" }
        ]
    }
};

const governmentData = {
    pemda: [
        { name: "Anozzs", role: "PEMDA", skinUrl: "https://lh3.googleusercontent.com/d/1gGAJ-CoFWBIXS_d-SQdeZavlk-L2Rjp2" }
    ],
    staff: [
        { name: "ShirokuHimatsu", role: "RT", skinUrl: "https://lh3.googleusercontent.com/d/1l_NLCW87R6Fstb2s464dGhoFxGCZ3ikK" },
        { name: "DrMurphy30", role: "KADES", skinUrl: "https://lh3.googleusercontent.com/d/1Fh4M7D8ltcSSVTSjbRSCW52g5w83oNlL" },
        { name: "YantoTambalBan", role: "SATPOL", skinUrl: "https://lh3.googleusercontent.com/d/1faMhY1b1QSwoStIvn84iMmUc-5S8-5qq" },
        { name: "ZED311", role: "SATPOL", skinUrl: "https://lh3.googleusercontent.com/d/1RmsD2e8pCEQvd90Ym-F_uYF408Hhpkm4" },
        { name: "Ipandora", role: "RT (RETIRED)", skinUrl: "https://lh3.googleusercontent.com/d/1thSevsAH560Qec0xgsHx4bDXw1kN5T2I" },
        { name: "TakeAll", role: "KULI", skinUrl: "https://lh3.googleusercontent.com/d/1FC7AV-dgbSM6bp8N1xUM81nXSJ8iS_Yt" },
        { name: "Ferclone", role: "KULI", skinUrl: "https://lh3.googleusercontent.com/d/1GK2K77hodU-AVsnHkqdoYk-Jyt46sevO" },
        { name: "Steve", role: "WARGA", skinUrl: "https://lh3.googleusercontent.com/d/1UfzVLZxJIMv02QSaTDmBZ216VlDiiJYY" }
    ]
};
