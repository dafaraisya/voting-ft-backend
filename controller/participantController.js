// Import Participant model
Participant = require("../model/participantModel");
Session = require("../model/sessionModel");

var ip = [
  "36.81.8.39",
  "115.178.245.1",
  "120.188.87.161",
  "182.2.70.49",
  "36.82.16.96",
  "182.1.113.100",
  "36.72.212.123",
  "180.242.214.231",
  "182.2.41.152",
  "182.0.198.123",
  "36.65.160.63",
  "182.2.40.27",
  "36.74.208.155",
  "182.2.71.32",
  "182.0.237.81",
  "103.79.154.187",
  "114.5.109.44",
  "182.2.37.131",
  "120.188.74.160",
  "182.2.39.180",
];

// Handle index actions
exports.index = function (req, res) {
  Participant.get(function (err, participants) {
    if (err) {
      return res.json({
        status: "error",
        message: err,
      });
    }

    participants = [].concat(participants).reverse();

    return res.json({
      status: "success",
      message: "Participant Added Successfully",
      data: participants,
    });
  });
};

// Handle search actions
exports.search = function (req, res) {
  Participant.find(
    {
      name: {
        $regex: req.params.name,
      },
    },
    function (err, participants) {
      if (err) {
        return res.json({
          status: "error",
          message: err,
        });
      }

      participants = [].concat(participants).reverse();

      return res.json({
        status: "success",
        message: "Participant Added Successfully",
        data: participants,
      });
    }
  );
};

// Handle index actions
exports.indexByPage = async function (req, res) {
  var page = req.params.page;
  try {
    var totalParticipant = await Participant.count();
    var participants = await Participant.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    return res.json({
      status: "success",
      message: "Participant Added Successfully",
      data: {
        participants: participants,
        totalPage: Math.ceil(totalParticipant / 10),
      },
    });
  } catch (err) {
    return res.send(err);
  }
};

// Handle view actions
exports.view = function (req, res) {
  Participant.findById(req.params.id, function (err, participant) {
    if (err) return res.send(err);
    return res.json({
      message: "participants Detail Loading...",
      data: participant,
    });
  });
};

// Handle create actions
exports.new = function (req, res) {
  var participants = [
    {
      "no": 1,
      "email": "faizuddinfadly@student.uns.ac.id",
      "name": "Ahmad Faizuddin Fadly",
      "nim": "I0217005",
      "angkatan": 2017
    },
    {
      "no": 2,
      "email": "risalahannisa@student.uns.ac.id",
      "name": "Risalah Ilham Annisa",
      "nim": "I0217076",
      "angkatan": 2017
    },
    {
      "no": 3,
      "email": "shafirazrosyadi@student.uns.ac.id",
      "name": "Shafira Zahro Rosyadi",
      "nim": "I0217083",
      "angkatan": 2017
    },
    {
      "no": 4,
      "email": "Aqilasalima@student.uns.ac.id",
      "name": "Aqila salima alifaristi",
      "nim": "I0218018",
      "angkatan": 2018
    },
    {
      "no": 5,
      "email": "dimasnurhasanto@student.uns.ac.id",
      "name": "Dimas Nur Hasanto",
      "nim": "I0218027",
      "angkatan": 2018
    },
    {
      "no": 6,
      "email": "divaangkasa22@student.uns.ac.id",
      "name": "diva angkasa wahyu pratama",
      "nim": "I0218028",
      "angkatan": 2018
    },
    {
      "no": 7,
      "email": "eunikeaprillak.s@student.uns.ac.id",
      "name": "Eunike Aprilla Kus Setyaningsih",
      "nim": "I0218032",
      "angkatan": 2018
    },
    {
      "no": 8,
      "email": "fira.safitri16@student.uns.ac.id",
      "name": "Fira Safitri Rizkiyanty",
      "nim": "I0218035",
      "angkatan": 2018
    },
    {
      "no": 9,
      "email": "Septyaningrum.laraswati@student.uns.ac.id",
      "name": "Laraswati Septyaningrum",
      "nim": "I0218041",
      "angkatan": 2018
    },
    {
      "no": 10,
      "email": "nadiashafarahmadiena@student.uns.ac.id",
      "name": "Nadia Shafa Rahmadiena",
      "nim": "I0218054",
      "angkatan": 2018
    },
    {
      "no": 11,
      "email": "khaniyahayaf@student.uns.ac.id",
      "name": "Raden rara khaniya haya faiza",
      "nim": "I0218067",
      "angkatan": 2018
    },
    {
      "no": 12,
      "email": "alifinaizzah@student.uns.ac.id",
      "name": "Alifina Nurul Izzah",
      "nim": "I0219010",
      "angkatan": 2019
    },
    {
      "no": 13,
      "email": "almiranurfitriani@student.uns.ac.id",
      "name": "Almira Nur Fitriani",
      "nim": "I0219011",
      "angkatan": 2019
    },
    {
      "no": 14,
      "email": "anandarose19@student.uns.ac.id",
      "name": "Ananda Rosputri Setya Ningrum",
      "nim": "I0219013",
      "angkatan": 2019
    },
    {
      "no": 15,
      "email": "anselmusdimas6@student.uns.ac.id",
      "name": "Anselmus Dimas Surya Adi Prabowo",
      "nim": "I0219015",
      "angkatan": 2019
    },
    {
      "no": 16,
      "email": "arinaputrifaza@student.uns.ac.id",
      "name": "Arina Putri Faza",
      "nim": "I0219016",
      "angkatan": 2019
    },
    {
      "no": 17,
      "email": "aulaulia175@student.uns.ac.id",
      "name": "Aulia Khoirun Nisa'",
      "nim": "I0219019",
      "angkatan": 2019
    },
    {
      "no": 18,
      "email": "auliaputrispt@student.uns.ac.id",
      "name": "Aulia Putri Septiani",
      "nim": "I0219020",
      "angkatan": 2019
    },
    {
      "no": 19,
      "email": "aureliavina@student.uns.ac.id",
      "name": "Aurelia Nadia Oktavina",
      "nim": "I0219022",
      "angkatan": 2019
    },
    {
      "no": 20,
      "email": "azizahkhoirotunn@student.uns.ac.id",
      "name": "Azizah Khoirotun Nisa",
      "nim": "I0219023",
      "angkatan": 2019
    },
    {
      "no": 21,
      "email": "belindasekar@student.uns.ac.id",
      "name": "Belinda Sekar Ayu Ningtyas",
      "nim": "I0219024",
      "angkatan": 2019
    },
    {
      "no": 22,
      "email": "dewabintangk@student.uns.ac.id",
      "name": "Dewa Bintang Karolassasi",
      "nim": "I0219030",
      "angkatan": 2019
    },
    {
      "no": 23,
      "email": "dewissukmaa@student.uns.ac.id",
      "name": "Dewi Sukma Jati",
      "nim": "I0219032",
      "angkatan": 2019
    },
    {
      "no": 24,
      "email": "fatur18@student.uns.ac.id",
      "name": "Fathur Rahman",
      "nim": "I0219041",
      "angkatan": 2019
    },
    {
      "no": 25,
      "email": "haidaralialhakim01@student.uns.ac.id",
      "name": "Haidar Ali Alhakim",
      "nim": "I0219044",
      "angkatan": 2019
    },
    {
      "no": 26,
      "email": "herdionchris@student.uns.ac.id",
      "name": "Herdion Christian Putra Ervan",
      "nim": "I0219047",
      "angkatan": 2019
    },
    {
      "no": 27,
      "email": "Marwasari060@student.uns.ac.id",
      "name": "Marwa Kemala Sari",
      "nim": "I0219053",
      "angkatan": 2019
    },
    {
      "no": 28,
      "email": "rivaldimuhammad11@student.uns.ac.id",
      "name": "Muhammad Rivaldi",
      "nim": "I0219058",
      "angkatan": 2019
    },
    {
      "no": 29,
      "email": "muh.zain2001@student.uns.ac.id",
      "name": "Muhammad Zain Mutawakkil",
      "nim": "I0219059",
      "angkatan": 2019
    },
    {
      "no": 30,
      "email": "mushabfaruq07@student.uns.ac.id",
      "name": "Mush'ab Faruq Abdullah",
      "nim": "I0219060",
      "angkatan": 2019
    },
    {
      "no": 31,
      "email": "nindyaadhysti28@student.uns.ac.id",
      "name": "Nindya Adhysti Resti Hasanah",
      "nim": "I0219066",
      "angkatan": 2019
    },
    {
      "no": 32,
      "email": "nurainikusumaputeri123@student.uns.ac.id",
      "name": "Nur'aini Kusuma Puteri",
      "nim": "I0219067",
      "angkatan": 2019
    },
    {
      "no": 33,
      "email": "nurulizzahtaqiyya@student.uns.ac.id",
      "name": "nurul izzah taqiyya",
      "nim": "I0219069",
      "angkatan": 2019
    },
    {
      "no": 34,
      "email": "putri.hidayahsari@student.uns.ac.id",
      "name": "PUTRI ANISA N",
      "nim": "I0219071",
      "angkatan": 2019
    },
    {
      "no": 35,
      "email": "rakaidiasrizky26@student.uns.ac.id",
      "name": "Rakai Dias Rizky",
      "nim": "I0219072",
      "angkatan": 2019
    },
    {
      "no": 36,
      "email": "ranaiz@student.uns.ac.id",
      "name": "Ranaiz Pramillasvari",
      "nim": "I0219073",
      "angkatan": 2019
    },
    {
      "no": 37,
      "email": "siskakumala@student.uns.ac.id",
      "name": "Siska Kumala Dewi",
      "nim": "I0219084",
      "angkatan": 2019
    },
    {
      "no": 38,
      "email": "tahaniimtinan@student.uns.ac.id",
      "name": "Tahani Rizky Imtinan",
      "nim": "I0219087",
      "angkatan": 2019
    },
    {
      "no": 39,
      "email": "tpanggorgha@student.uns.ac.id",
      "name": "Timothy Panggorgha",
      "nim": "I0219088",
      "angkatan": 2019
    },
    {
      "no": 40,
      "email": "imamsuhardie@student.uns.ac.id",
      "name": "Ubaidillah Imam Suhardi",
      "nim": "I0219090",
      "angkatan": 2019
    },
    {
      "no": 41,
      "email": "Althafyara_2@student.uns.ac.id",
      "name": "Althaf yara",
      "nim": "I0220117",
      "angkatan": 2020
    },
    {
      "no": 42,
      "email": "anisa.putri@student.uns.ac.id",
      "name": "Anisa Putri",
      "nim": "I020009",
      "angkatan": 2020
    },
    {
      "no": 43,
      "email": "adeliatiarahapsari@student.uns.ac.id",
      "name": "Adelia Tiara Hapsari",
      "nim": "I0220001",
      "angkatan": 2020
    },
    {
      "no": 44,
      "email": "affanmaulana@student.uns.ac.id",
      "name": "Affan Maulana Yasin",
      "nim": "I0220002",
      "angkatan": 2020
    },
    {
      "no": 45,
      "email": "anandaangels26@student.uns.ac.id",
      "name": "Ananda Angels Hanifah Santoso",
      "nim": "I0220003",
      "angkatan": 2020
    },
    {
      "no": 46,
      "email": "andienap4@student.uns.ac.id",
      "name": "Andien Aurellia Purnama",
      "nim": "I0220004",
      "angkatan": 2020
    },
    {
      "no": 47,
      "email": "anindyapavitas18@student.uns.ac.id",
      "name": "Anindya Pavita Salsabila",
      "nim": "I0220006",
      "angkatan": 2020
    },
    {
      "no": 48,
      "email": "anissaipung02@student.uns.ac.id",
      "name": "Anisa Ipung Pinanggih",
      "nim": "I0220007",
      "angkatan": 2020
    },
    {
      "no": 49,
      "email": "anisanovita_sr@student.uns.ac.id",
      "name": "Anisa Novita Sari",
      "nim": "I0220008",
      "angkatan": 2020
    },
    {
      "no": 50,
      "email": "annisamutiars@student.uns.ac.id",
      "name": "Annisa Mutiara Salsabila",
      "nim": "I0220010",
      "angkatan": 2020
    },
    {
      "no": 51,
      "email": "annisahawadah@student.uns.ac.id",
      "name": "Annisa Nur Hawadah",
      "nim": "I0220011",
      "angkatan": 2020
    },
    {
      "no": 52,
      "email": "annisashafia@student.uns.ac.id",
      "name": "Annisa Shafia Mushaffa",
      "nim": "I0220012",
      "angkatan": 2020
    },
    {
      "no": 53,
      "email": "ardhiya.putri11@student.uns.ac.id",
      "name": "ardhya putri",
      "nim": "I0220013",
      "angkatan": 2020
    },
    {
      "no": 54,
      "email": "arfanyazid@student.uns.ac.id",
      "name": "Arfan Yazid Bukhari",
      "nim": "I0220014",
      "angkatan": 2020
    },
    {
      "no": 55,
      "email": "art.dea@student.uns.ac.id",
      "name": "Artdea Putri",
      "nim": "I0220016",
      "angkatan": 2020
    },
    {
      "no": 56,
      "email": "aryadienifarah17@student.uns.ac.id",
      "name": "Aryadieni Farah Ayu Santoso",
      "nim": "I0220017",
      "angkatan": 2020
    },
    {
      "no": 57,
      "email": "bagaastr@student.uns.ac.id",
      "name": "Bagas Trio Wahyu saputra",
      "nim": "I0220021",
      "angkatan": 2020
    },
    {
      "no": 58,
      "email": "balaa.syahidna@student.uns.ac.id",
      "name": "Balaa Syahidna Cahya Yudhistira",
      "nim": "I0220022",
      "angkatan": 2020
    },
    {
      "no": 59,
      "email": "belindakomala@student.uns.ac.id",
      "name": "Belinda Komalasari",
      "nim": "I0220023",
      "angkatan": 2020
    },
    {
      "no": 60,
      "email": "caesariapuspa@student.uns.ac.id",
      "name": "Caesaria Puspa Wardhani",
      "nim": "I0220026",
      "angkatan": 2020
    },
    {
      "no": 61,
      "email": "caristha_hp03@student.uns.ac.id",
      "name": "Caristha Hazellia Putri",
      "nim": "I0220027",
      "angkatan": 2020
    },
    {
      "no": 62,
      "email": "devinda.30@student.uns.ac.id",
      "name": "Devinda Annisa Laily",
      "nim": "I0220029",
      "angkatan": 2020
    },
    {
      "no": 63,
      "email": "dewiretnoningrum8@student.uns.ac.id",
      "name": "Dewi Retno Ningrum",
      "nim": "I0220030",
      "angkatan": 2020
    },
    {
      "no": 64,
      "email": "dee.annisa@student.uns.ac.id",
      "name": "Diandra Annisa Utami Arianto",
      "nim": "I0220031",
      "angkatan": 2020
    },
    {
      "no": 65,
      "email": "diantaranura@student.uns.ac.id",
      "name": "Diantara Nur Alam",
      "nim": "I0220032",
      "angkatan": 2020
    },
    {
      "no": 66,
      "email": "dindajanuarita@student.uns.ac.id",
      "name": "Dinda Januarita Maharani",
      "nim": "I0220033",
      "angkatan": 2020
    },
    {
      "no": 67,
      "email": "dipta.duhita@student.uns.ac.id",
      "name": "Dipta Duhita Ahimsa",
      "nim": "I0220034",
      "angkatan": 2020
    },
    {
      "no": 68,
      "email": "fatimah_fatim@student.uns.ac.id",
      "name": "Fatimah",
      "nim": "I0220037",
      "angkatan": 2020
    },
    {
      "no": 69,
      "email": "uzi.fahadist@student.uns.ac.id",
      "name": "Fauzia Hadist",
      "nim": "I0220038",
      "angkatan": 2020
    },
    {
      "no": 70,
      "email": "firsyamalia@student.uns.ac.id",
      "name": "Firsya Amalia Azzahra",
      "nim": "I0220040",
      "angkatan": 2020
    },
    {
      "no": 71,
      "email": "julisa.friska@student.uns.ac.id",
      "name": "Florentina Julisa Friska Cristiani",
      "nim": "I0220041",
      "angkatan": 2020
    },
    {
      "no": 72,
      "email": "gunawan_wisnu07@student.uns.ac.id",
      "name": "Gunawan Wisnu Hartadi",
      "nim": "I0220042",
      "angkatan": 2020
    },
    {
      "no": 73,
      "email": "harisimddn@student.uns.ac.id",
      "name": "Haris Imaduddin",
      "nim": "I0220043",
      "angkatan": 2020
    },
    {
      "no": 74,
      "email": "hasnahaura@student.uns.ac.id",
      "name": "Hasna Haura Taqiyyah",
      "nim": "I0220045",
      "angkatan": 2020
    },
    {
      "no": 75,
      "email": "irfanahmadn@student.uns.ac.id",
      "name": "Irfan Ahmad Nugraha",
      "nim": "I0220046",
      "angkatan": 2020
    },
    {
      "no": 76,
      "email": "izza.dennas@student.uns.ac.id",
      "name": "Izza Dennas",
      "nim": "I0220048",
      "angkatan": 2020
    },
    {
      "no": 77,
      "email": "jacinta_sampe@student.uns.ac.id",
      "name": "Jacinta Sampe",
      "nim": "I0220049",
      "angkatan": 2020
    },
    {
      "no": 78,
      "email": "tiffaniakartika@student.uns.ac.id",
      "name": "Kartika Tiffania Fairuza Firdaus",
      "nim": "I0220051",
      "angkatan": 2020
    },
    {
      "no": 79,
      "email": "kathernjoanna@student.uns.ac.id",
      "name": "Kathern Joanna",
      "nim": "I0220052",
      "angkatan": 2020
    },
    {
      "no": 80,
      "email": "kemawd@student.uns.ac.id",
      "name": "Kemal Wirayuda Dwitama",
      "nim": "I0220053",
      "angkatan": 2020
    },
    {
      "no": 81,
      "email": "Khairunnisa.9h@student.uns.ac.id",
      "name": "Khairunnisa Fitriani Salsabila",
      "nim": "I0220054",
      "angkatan": 2020
    },
    {
      "no": 82,
      "email": "lexa.yonan@student.uns.ac.id",
      "name": "Lexa Maulvi Yonan",
      "nim": "I0220055",
      "angkatan": 2020
    },
    {
      "no": 83,
      "email": "titansusilo.02@student.uns.ac.id",
      "name": "Marius mahisa titan susilo",
      "nim": "I0220058",
      "angkatan": 2020
    },
    {
      "no": 84,
      "email": "ayarikrismawan@student.uns.ac.id",
      "name": "Maya Puspita Sari",
      "nim": "I0220059",
      "angkatan": 2020
    },
    {
      "no": 85,
      "email": "mazzazulfikarw@student.uns.ac.id",
      "name": "Mazza Zulfikar Wibowo",
      "nim": "I0220060",
      "angkatan": 2020
    },
    {
      "no": 86,
      "email": "dhizmayana@student.uns.ac.id",
      "name": "Muhammad Daffa Hizmayana Putra",
      "nim": "I0220061",
      "angkatan": 2020
    },
    {
      "no": 87,
      "email": "diasamulia@student.uns.ac.id",
      "name": "Muhammad Dias Aji Mulia",
      "nim": "I0220062",
      "angkatan": 2020
    },
    {
      "no": 88,
      "email": "gavin.arya15@student.uns.ac.id",
      "name": "Muhammad Gavin Arya Faiz Ramadhan",
      "nim": "I0220063",
      "angkatan": 2020
    },
    {
      "no": 89,
      "email": "husadawan@student.uns.ac.id",
      "name": "Muhammad Maulana Irfani Husadawan",
      "nim": "I0220064",
      "angkatan": 2020
    },
    {
      "no": 90,
      "email": "shidqisyaamil@student.uns.ac.id",
      "name": "Muhammad Shidqi Syaamil",
      "nim": "I0220066",
      "angkatan": 2020
    },
    {
      "no": 91,
      "email": "nabilapermatasari_40@student.uns.ac.id",
      "name": "Nabila Permatasari",
      "nim": "I0220068",
      "angkatan": 2020
    },
    {
      "no": 92,
      "email": "nadiamirza@student.uns.ac.id",
      "name": "Nadia Mirza Arviani",
      "nim": "I0220069",
      "angkatan": 2020
    },
    {
      "no": 93,
      "email": "naimassaad.22@student.uns.ac.id",
      "name": "Na'im Assa'ad",
      "nim": "I0220071",
      "angkatan": 2020
    },
    {
      "no": 94,
      "email": "novitarahmasp@student.uns.ac.id",
      "name": "Novita Rahmadani S. P.",
      "nim": "I0220073",
      "angkatan": 2020
    },
    {
      "no": 95,
      "email": "nurzahravira_0907@student.uns.ac.id",
      "name": "Nur Zahra Vira Diva Mallarangan",
      "nim": "I0220074",
      "angkatan": 2020
    },
    {
      "no": 96,
      "email": "oasisridho170302@student.uns.ac.id",
      "name": "OASIS RIDHO ILLAHI",
      "nim": "I0220075",
      "angkatan": 2020
    },
    {
      "no": 97,
      "email": "pramudyaw53@student.uns.ac.id",
      "name": "Pramudya Wahyu Pamungkas",
      "nim": "I0220076",
      "angkatan": 2020
    },
    {
      "no": 98,
      "email": "raayughita@student.uns.ac.id",
      "name": "Raden Ajeng Ayu Ghita Cahyaningrum",
      "nim": "I0220077",
      "angkatan": 2020
    },
    {
      "no": 99,
      "email": "rakhawidhiwasa_22@student.uns.ac.id",
      "name": "Rakha widhiwasa",
      "nim": "I0220077",
      "angkatan": 2020
    },
    {
      "no": 100,
      "email": "radistyaandanto@student.uns.ac.id",
      "name": "Ramadian Adistya Andanto",
      "nim": "I0220079",
      "angkatan": 2020
    },
    {
      "no": 101,
      "email": "rarajulieta03@student.uns.ac.id",
      "name": "rara julieta anisahra",
      "nim": "I0220080",
      "angkatan": 2020
    },
    {
      "no": 102,
      "email": "rasyidauliarahman@student.uns.ac.id",
      "name": "Rasyid Aulia Rahman",
      "nim": "I0220081",
      "angkatan": 2020
    },
    {
      "no": 103,
      "email": "rijalulsafwan@student.uns.ac.id",
      "name": "Rijalul Safwan Saleh",
      "nim": "I0220084",
      "angkatan": 2020
    },
    {
      "no": 104,
      "email": "rithmamila01@student.uns.ac.id",
      "name": "Rithmamila Mufida",
      "nim": "I0220085",
      "angkatan": 2020
    },
    {
      "no": 105,
      "email": "Rizkiprayoga@student.uns.ac.id",
      "name": "Rizki Prayoga",
      "nim": "I0220086",
      "angkatan": 2020
    },
    {
      "no": 106,
      "email": "ryahya1012@student.uns.ac.id",
      "name": "Robi Yahya Purnomo",
      "nim": "I0220087",
      "angkatan": 2020
    },
    {
      "no": 107,
      "email": "rosalinaenggar@student.uns.ac.id",
      "name": "Rosalina Enggar Pawening Galih",
      "nim": "I0220088",
      "angkatan": 2020
    },
    {
      "no": 108,
      "email": "rudiyaningsih@student.uns.ac.id",
      "name": "Rudiyaningsih",
      "nim": "I0220090",
      "angkatan": 2020
    },
    {
      "no": 109,
      "email": "saaluaulia24@student.uns.ac.id",
      "name": "Saalu Aulia Zaemur Huda",
      "nim": "I0220093",
      "angkatan": 2020
    },
    {
      "no": 110,
      "email": "shafirapr@student.uns.ac.id",
      "name": "Shafira Putri Ramadhanty",
      "nim": "I0220094",
      "angkatan": 2020
    },
    {
      "no": 111,
      "email": "shakirashasa@student.uns.ac.id",
      "name": "Shakira Shaadiya Nurmalinda",
      "nim": "I0220095",
      "angkatan": 2020
    },
    {
      "no": 112,
      "email": "sinta1204@student.uns.ac.id",
      "name": "Sinta Dwi Nur Amalia",
      "nim": "I0220097",
      "angkatan": 2020
    },
    {
      "no": 113,
      "email": "syafirassyahrah@student.uns.ac.id",
      "name": "Syafira As' Syahrah",
      "nim": "I0220098",
      "angkatan": 2020
    },
    {
      "no": 114,
      "email": "tasyakusuma@student.uns.ac.id",
      "name": "tasya kusumahayati",
      "nim": "I0220099",
      "angkatan": 2020
    },
    {
      "no": 115,
      "email": "Tegarteladaniars@student.uns.ac.id",
      "name": "Tegar Teladani",
      "nim": "I0220100",
      "angkatan": 2020
    },
    {
      "no": 116,
      "email": "tiarapuspa@student.uns.ac.id",
      "name": "Tiara Puspaditya Pramasari",
      "nim": "I0220101",
      "angkatan": 2020
    },
    {
      "no": 117,
      "email": "Waskithoagungpambudi@student.uns.ac.id",
      "name": "Waskitho Agung Pambudi",
      "nim": "I0220103",
      "angkatan": 2020
    },
    {
      "no": 118,
      "email": "widelyasr@student.uns.ac.id",
      "name": "Widelya Syifa Rivana",
      "nim": "I0220104",
      "angkatan": 2020
    },
    {
      "no": 119,
      "email": "yasmine24mutia@student.uns.ac.id",
      "name": "Yasmine Mutia Rahmawati Purnama",
      "nim": "I0220106",
      "angkatan": 2020
    },
    {
      "no": 120,
      "email": "yuniarisetyawati@student.uns.ac.id",
      "name": "Yuni Ari Setyawati",
      "nim": "I0220107",
      "angkatan": 2020
    },
    {
      "no": 121,
      "email": "zakiyahalya@student.uns.ac.id",
      "name": "Zakiyyah Alyaa Almaas",
      "nim": "I0220109",
      "angkatan": 2020
    },
    {
      "no": 122,
      "email": "zitaarisenda@student.uns.ac.id",
      "name": "Zita Natalia Arisenda",
      "nim": "I0220110",
      "angkatan": 2020
    },
    {
      "no": 123,
      "email": "geraldalessandro@student.uns.ac.id",
      "name": "Alessandro Palmatio Geraldo Teti",
      "nim": "I0220114",
      "angkatan": 2020
    },
    {
      "no": 124,
      "email": "alihamamafifuddin@student.uns.ac.id",
      "name": "Ali Hamam Afifuddin",
      "nim": "I0220115",
      "angkatan": 2020
    },
    {
      "no": 125,
      "email": "alifiahazzahra@student.uns.ac.id",
      "name": "Alifiah Azzahra",
      "nim": "I0220116",
      "angkatan": 2020
    },
    {
      "no": 126,
      "email": "ameilisabayu@student.uns.ac.id",
      "name": "Ameilisa Bayu Saputri",
      "nim": "I0220119",
      "angkatan": 2020
    },
    {
      "no": 127,
      "email": "afinanudiyaaddini@student.uns.ac.id",
      "name": "Afina Nudiya Addini",
      "nim": "I0220123",
      "angkatan": 2020
    },
    {
      "no": 128,
      "email": "faizalfebri08@student.uns.ac.id",
      "name": "Faizal Rahman Febriansyah",
      "nim": "I0220036",
      "angkatan": 2020
    },];

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.email = _participant.email;
    participant.session.id = "5fd5b40f8430463e5853f062";
    participant.session.number = 2;
    participant.session.min = new Date("2020-12-15T14:00:00.000Z");
    participant.session.max = new Date("2020-12-15T20:00:00.000Z");

    // Save and validate
    participant.save(function (err) {
      if (err) res.json(err);

      Session.findById(participant.session.id, function (err, session) {
        if (err) throw err;
        session.total_participant++;
        Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
          (session) => {
            if (session) {
            } else {
            }
          }
        );
      });

      /*return res.json({
      message: "New Participant Created!",
      data: participant,
    });*/
    });
  });
};

// Handle update actions
exports.update = function (req, res) {
  var moveSession = false;
  var oldSession = {};
  var newSession = {};

  Participant.findById(req.params.id, function (err, participant) {
    if (err) throw err;
    if (participant.session.id != req.body.sessionId) {
      moveSession = true;
      oldSession = participant.session;
      newSession = {
        id: req.body.sessionId,
        number: req.body.sessionNumber,
        start: new Date(req.body.sessionMin),
        end: new Date(req.body.sessionMax),
      };
    }
  });

  Participant.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        nim: req.body.nim,
        email: req.body.email,
        "session.id": req.body.sessionId,
        "session.number": req.body.sessionNumber,
        "session.min": new Date(req.body.sessionMin),
        "session.max": new Date(req.body.sessionMax),
      },
    }
  )
    .then((participant) => {
      if (participant) {
        if (moveSession) {
          Session.findById(newSession.id, function (err, session) {
            if (err) throw err;
            session.total_participant++;
            Session.findOneAndUpdate(
              { _id: session._id },
              { $set: session }
            ).then((session) => {
              if (session) {
              } else {
              }
            });
          });

          Session.findById(oldSession.id, function (err, session) {
            if (err) throw err;
            session.total_participant--;
            Session.findOneAndUpdate(
              { _id: session._id },
              { $set: session }
            ).then((session) => {
              if (session) {
              } else {
              }
            });
          });
        }

        return res.json({
          message: "participant updated",
          data: participant,
        });
      } else {
        return res.json({
          message: "participant not found",
          data: {},
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "error",
        data: err,
      });
    });
};

// Handle vote actions
exports.vote = function (req, res) {
  Participant.findOneAndUpdate(
    { _id: req.body.id_participant },
    {
      $set: {
        "voting.id_candidate_bem": req.body.id_candidate_bem,
        "voting.id_candidate_legislatif": req.body.id_candidate_legislatif,
        "voting.time": Date(),
        "voting.counted": 0,
      },
    }
  )
    .then((participant) => {
      if (participant) {
        return res.json({
          message: "participant voted",
          data: participant,
        });
      } else {
        return res.json({
          message: "participant not found",
          data: {},
        });
      }
    })
    .catch((err) => {
      return res.json({
        message: "error",
        data: err,
      });
    });
};

// Handle delete actions
exports.delete = function (req, res) {
  Participant.findById(req.params.id, function (err, participant) {
    if (err) return res.send(err);

    Session.findById(participant.session.id, function (err, session) {
      if (err) throw err;
      session.total_participant--;
      console.log("sessions id:" + session._id);
      Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
        (session) => {
          if (session) {
            Participant.deleteOne(
              {
                _id: req.params.id,
              },
              function (err, participant) {
                if (err) res.send(err);

                return res.json({
                  status: "success",
                  message: "Participant Deleted!",
                });
              }
            );
          } else {
          }
        }
      );
    });
  });
};

// Handle delete actions
exports.force_delete = function (req, res) {
  Participant.deleteOne(
    {
      _id: req.params.id,
    },
    function (err, participant) {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Participant Deleted!",
      });
    }
  );
};
