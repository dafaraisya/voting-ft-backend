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
      "email": "ardiana.irfan@student.uns.ac.id",
      "name": "Irfan Ardiana",
      "nim": "I0317039",
      "angkatan": 2017
    },
    {
      "no": 2,
      "email": "irfannoerdiansah99@student.uns.ac.id",
      "name": "Irfan Nurdiansah",
      "nim": "I0317040",
      "angkatan": 2017
    },
    {
      "no": 3,
      "email": "lintang@student.uns.ac.id",
      "name": "Lintang Vilda Gustari",
      "nim": "I0317045",
      "angkatan": 2017
    },
    {
      "no": 4,
      "email": "syaniahilda22@student.uns.ac.id",
      "name": "Syania Hilda Andini",
      "nim": "I0317088",
      "angkatan": 2017
    },
    {
      "no": 5,
      "email": "alifwise@student.uns.ac.id",
      "name": "Alif Darmasi Wicaksono",
      "nim": "I0318007",
      "angkatan": 2018
    },
    {
      "no": 6,
      "email": "anisadrhh@student.uns.ac.id",
      "name": "Anisa Nur Maya D.R.H.H.",
      "nim": "I0318014",
      "angkatan": 2018
    },
    {
      "no": 7,
      "email": "annisapuja06@student.uns.ac.id",
      "name": "Annisa Puja Ramadhandyna",
      "nim": "I0318016",
      "angkatan": 2018
    },
    {
      "no": 8,
      "email": "annisasyahliantina@student.uns.ac.id",
      "name": "Annisa Syahliantina",
      "nim": "I0318017",
      "angkatan": 2018
    },
    {
      "no": 9,
      "email": "dinanrftr@student.uns.ac.id",
      "name": "Dina Nurfitri Rahma",
      "nim": "I0318026",
      "angkatan": 2018
    },
    {
      "no": 10,
      "email": "anasrulhakim19@student.uns.ac.id",
      "name": "Eka Anasrul Hakim",
      "nim": "I0318028",
      "angkatan": 2018
    },
    {
      "no": 11,
      "email": "fadhilrh31700@student.uns.ac.id",
      "name": "Fadhil Rafi Hidayat",
      "nim": "I0318033",
      "angkatan": 2018
    },
    {
      "no": 12,
      "email": "Faizshafwanhanif@student.uns.ac.id",
      "name": "Faiz Shafwan Hanif",
      "nim": "I0318034",
      "angkatan": 2018
    },
    {
      "no": 13,
      "email": "kyrieanggitomunthe@student.uns.ac.id",
      "name": "Kyrie Anggito M.The",
      "nim": "I0318052",
      "angkatan": 2018
    },
    {
      "no": 14,
      "email": "lsaaldirah@student.uns.ac.id",
      "name": "Lsa Aldira Hafidza",
      "nim": "I0318054",
      "angkatan": 2018
    },
    {
      "no": 15,
      "email": "mellawati_0910@student.uns.ac.id",
      "name": "Mellawati Kusumaningrum",
      "nim": "I0318057",
      "angkatan": 2018
    },
    {
      "no": 16,
      "email": "ilmanzidni@student.uns.ac.id",
      "name": "Muhammad Ilman Zidni",
      "nim": "I0318062",
      "angkatan": 2018
    },
    {
      "no": 17,
      "email": "nawangputrisalsabila65@student.uns.ac.id",
      "name": "Nawang Putri Salsabila",
      "nim": "I0318071",
      "angkatan": 2018
    },
    {
      "no": 18,
      "email": "safiranariswari@student.uns.ac.id",
      "name": "safira nariswari",
      "nim": "I0318083",
      "angkatan": 2018
    },
    {
      "no": 19,
      "email": "shafakeysa3@student.uns.ac.id",
      "name": "Shafa Keysa Rinjani Hananta",
      "nim": "I0318084",
      "angkatan": 2018
    },
    {
      "no": 20,
      "email": "sukma_yustika@student.uns.ac.id",
      "name": "Sukma Yustika Andriani",
      "nim": "I0318086",
      "angkatan": 2018
    },
    {
      "no": 21,
      "email": "wulistifarosa@student.uns.ac.id",
      "name": "Wulan Istifarrosa",
      "nim": "I0318093",
      "angkatan": 2018
    },
    {
      "no": 22,
      "email": "acintyajewels77@student.uns.ac.id",
      "name": "Acintya Udan Arum",
      "nim": "I0319001",
      "angkatan": 2019
    },
    {
      "no": 23,
      "email": "aldilaha@student.uns.ac.id",
      "name": "Aldila Hindun Assifa",
      "nim": "I0319009",
      "angkatan": 2019
    },
    {
      "no": 24,
      "email": "alexanderdyw@student.uns.ac.id",
      "name": "Alexander Devo",
      "nim": "I0319010",
      "angkatan": 2019
    },
    {
      "no": 25,
      "email": "shafaareta454@student.uns.ac.id",
      "name": "Areta Shafa Ardelia",
      "nim": "I0319015",
      "angkatan": 2019
    },
    {
      "no": 26,
      "email": "dichafirani@student.uns.ac.id",
      "name": "Asyifah Dicha Firani",
      "nim": "I0319016",
      "angkatan": 2019
    },
    {
      "no": 27,
      "email": "basyafira@student.uns.ac.id",
      "name": "Aulia Ba'syafira Widiyanti",
      "nim": "I0319017",
      "angkatan": 2019
    },
    {
      "no": 28,
      "email": "deas_muhammad01@student.uns.ac.id",
      "name": "Deas Felice Muhammad",
      "nim": "I0319020",
      "angkatan": 2019
    },
    {
      "no": 29,
      "email": "desikaanggii@student.uns.ac.id",
      "name": "Desika Anggi Fitriana",
      "nim": "I0319022",
      "angkatan": 2019
    },
    {
      "no": 30,
      "email": "devinaafifah@student.uns.ac.id",
      "name": "Devina Nur Affifah",
      "nim": "I0319023",
      "angkatan": 2019
    },
    {
      "no": 31,
      "email": "dimasnbh@student.uns.ac.id",
      "name": "Dimas Nurbani Harefah",
      "nim": "I0319025",
      "angkatan": 2019
    },
    {
      "no": 32,
      "email": "dirgantaraputra14@student.uns.ac.id",
      "name": "Dirgantara kusuma putra",
      "nim": "I0319026",
      "angkatan": 2019
    },
    {
      "no": 33,
      "email": "widyahabsari09@student.uns.ac.id",
      "name": "Dwi Sulistyo Widya Habsari",
      "nim": "I0319028",
      "angkatan": 2019
    },
    {
      "no": 34,
      "email": "elviravidi@student.uns.ac.id",
      "name": "Elfira Vidian Paquita",
      "nim": "I0319030",
      "angkatan": 2019
    },
    {
      "no": 35,
      "email": "Elvabunga1709@student.uns.ac.id",
      "name": "Elva Bunga Mandira Arifianti",
      "nim": "I0319031",
      "angkatan": 2019
    },
    {
      "no": 36,
      "email": "deadeye00@student.uns.ac.id",
      "name": "Fahreza Winanda",
      "nim": "I0319032",
      "angkatan": 2019
    },
    {
      "no": 37,
      "email": "fatimahjihan@student.uns.ac.id",
      "name": "Fatimah Jihan",
      "nim": "I0319035",
      "angkatan": 2019
    },
    {
      "no": 38,
      "email": "Fitriadindak@student.uns.ac.id",
      "name": "Fitria Dinda Kartika",
      "nim": "I0319037",
      "angkatan": 2019
    },
    {
      "no": 39,
      "email": "ghanghan0909@student.uns.ac.id",
      "name": "Ghani Naufal Tamma",
      "nim": "I0319038",
      "angkatan": 2019
    },
    {
      "no": 40,
      "email": "gloriamargareth21@student.uns.ac.id",
      "name": "Gloria Margareth Hutagalung",
      "nim": "I0319040",
      "angkatan": 2019
    },
    {
      "no": 41,
      "email": "ihzayoga12@student.uns.ac.id",
      "name": "ihza yoga braswara",
      "nim": "I0319048",
      "angkatan": 2019
    },
    {
      "no": 42,
      "email": "ilzaathiyatamimyhanun@student.uns.ac.id",
      "name": "Ilza Athiyatamimy Hanun",
      "nim": "I0319049",
      "angkatan": 2019
    },
    {
      "no": 43,
      "email": "bl_salsabila@student.uns.ac.id",
      "name": "Khairunnisa Nur Salsabila",
      "nim": "I0319052",
      "angkatan": 2019
    },
    {
      "no": 44,
      "email": "latifu_itsna@student.uns.ac.id",
      "name": "Latifu Itsnaini Khoirun Nafiah",
      "nim": "I0319054",
      "angkatan": 2019
    },
    {
      "no": 45,
      "email": "lovianaajeng@student.uns.ac.id",
      "name": "Loviana Ajeng",
      "nim": "I0319055",
      "angkatan": 2019
    },
    {
      "no": 46,
      "email": "Luthfiana.rahma@student.uns.ac.id",
      "name": "Luthfiana Rahmayani",
      "nim": "I0319056",
      "angkatan": 2019
    },
    {
      "no": 47,
      "email": "miftahmukarohmah@student.uns.ac.id",
      "name": "Miftah Al Mukarohmah",
      "nim": "I0319058",
      "angkatan": 2019
    },
    {
      "no": 48,
      "email": "rafdinal68@student.uns.ac.id",
      "name": "Mohamad Rafdinal Setyoko",
      "nim": "I0319060",
      "angkatan": 2019
    },
    {
      "no": 49,
      "email": "rafflywira01@student.uns.ac.id",
      "name": "Muhamad Raffly Wira Wicaksono",
      "nim": "I0319061",
      "angkatan": 2019
    },
    {
      "no": 50,
      "email": "nurazizi200900@student.uns.ac.id",
      "name": "Muhammad Fawaid Nurazizi",
      "nim": "I0319062",
      "angkatan": 2019
    },
    {
      "no": 51,
      "email": "naufaladitya210@student.uns.ac.id",
      "name": "Muhammad Naufal Aditya Nugraha",
      "nim": "I0319066",
      "angkatan": 2019
    },
    {
      "no": 52,
      "email": "rafiifdlh19@student.uns.ac.id",
      "name": "Muhammad Rafii Fadillah",
      "nim": "I0319068",
      "angkatan": 2019
    },
    {
      "no": 53,
      "email": "ridzky_nb9916@student.uns.ac.id",
      "name": "Muhammad Ridzky Hanura",
      "nim": "I0319070",
      "angkatan": 2019
    },
    {
      "no": 54,
      "email": "fnzky4@student.uns.ac.id",
      "name": "Muhammad Rizki Akbar",
      "nim": "I0319071",
      "angkatan": 2019
    },
    {
      "no": 55,
      "email": "nadyasyafa4202@student.uns.ac.id",
      "name": "Nadya Syafa Kamila",
      "nim": "I0319073",
      "angkatan": 2019
    },
    {
      "no": 56,
      "email": "nathaniaangie@student.uns.ac.id",
      "name": "Nathania Angelica",
      "nim": "I0319075",
      "angkatan": 2019
    },
    {
      "no": 57,
      "email": "nawang.wihandini@student.uns.ac.id",
      "name": "Nawang Wihandini",
      "nim": "I0319076",
      "angkatan": 2019
    },
    {
      "no": 58,
      "email": "nisaaazzh20@student.uns.ac.id",
      "name": "Nisa Nur Azizah",
      "nim": "I0319079",
      "angkatan": 2019
    },
    {
      "no": 59,
      "email": "novianadwim@student.uns.ac.id",
      "name": "Noviana Dwi",
      "nim": "I0319080",
      "angkatan": 2019
    },
    {
      "no": 60,
      "email": "putrisausank@student.uns.ac.id",
      "name": "Putri Sausan Kis Hanifah",
      "nim": "I0319087",
      "angkatan": 2019
    },
    {
      "no": 61,
      "email": "rahmafaza842@student.uns.ac.id",
      "name": "Rahma Faza Anggita",
      "nim": "I0319088",
      "angkatan": 2019
    },
    {
      "no": 62,
      "email": "Rifaatuljazilah@student.uns.ac.id",
      "name": "Rifa’atul Jazilah",
      "nim": "I0319090",
      "angkatan": 2019
    },
    {
      "no": 63,
      "email": "rudolfm871@student.uns.ac.id",
      "name": "Rudolf Sahat Marisi Marpaung",
      "nim": "I0319091",
      "angkatan": 2019
    },
    {
      "no": 64,
      "email": "ryanferza@student.uns.ac.id",
      "name": "Ryan Ferza Ramadhan",
      "nim": "I0319093",
      "angkatan": 2019
    },
    {
      "no": 65,
      "email": "igochaniago@student.uns.ac.id",
      "name": "Satrio Fachri Chaniago",
      "nim": "I0319096",
      "angkatan": 2019
    },
    {
      "no": 66,
      "email": "sellaintan.si@student.uns.ac.id",
      "name": "Sella Intan Riano",
      "nim": "I0319097",
      "angkatan": 2019
    },
    {
      "no": 67,
      "email": "shabrinacnr@student.uns.ac.id",
      "name": "Shabrina Chairunnisaa Novia Ramadhany",
      "nim": "I0319099",
      "angkatan": 2019
    },
    {
      "no": 68,
      "email": "silviadsaff@student.uns.ac.id",
      "name": "Silvia Dhea Safira",
      "nim": "I0319100",
      "angkatan": 2019
    },
    {
      "no": 69,
      "email": "surya.agung08@student.uns.ac.id",
      "name": "Surya Agung Nugroho",
      "nim": "I0319102",
      "angkatan": 2019
    },
    {
      "no": 70,
      "email": "talitha.nabila20@student.uns.ac.id",
      "name": "talitha nabila assahda",
      "nim": "I0319104",
      "angkatan": 2019
    },
    {
      "no": 71,
      "email": "yuliancandra75@student.uns.ac.id",
      "name": "Yulian Candra Prayoga",
      "nim": "I0319110",
      "angkatan": 2019
    },
    {
      "no": 72,
      "email": "afrasaniy@student.uns.ac.id",
      "name": "Yunia Nyr Afrasaniy Afina",
      "nim": "I0319111",
      "angkatan": 2019
    },
    {
      "no": 73,
      "email": "zahra.humaida@student.uns.ac.id",
      "name": "Zahra Humaida Rahman",
      "nim": "I0319112",
      "angkatan": 2019
    },
    {
      "no": 74,
      "email": "zatimindandi45@student.uns.ac.id",
      "name": "Zati Hulwani Mindandi",
      "nim": "I0319113",
      "angkatan": 2019
    },
    {
      "no": 75,
      "email": "zufarariq15@student.uns.ac.id",
      "name": "Zufar Ariq Marza Muhammad",
      "nim": "I0319114",
      "angkatan": 2019
    },
    {
      "no": 76,
      "email": "adhiatmaka@student.uns.ac.id",
      "name": "Adhiatmaka Purna Wisuda",
      "nim": "I0320001",
      "angkatan": 2020
    },
    {
      "no": 77,
      "email": "adrian.kwanadi@student.uns.ac.id",
      "name": "Adrian Kwanadi Setiono",
      "nim": "I0320002",
      "angkatan": 2020
    },
    {
      "no": 78,
      "email": "afiqramadhan512@student.uns.ac.id",
      "name": "Afiq Ramadhan",
      "nim": "I0320003",
      "angkatan": 2020
    },
    {
      "no": 79,
      "email": "aguskurnia123.ak@student.uns.ac.id",
      "name": "Agus Kurnia Akbar",
      "nim": "I0320004",
      "angkatan": 2020
    },
    {
      "no": 80,
      "email": "Alifianarahma03@student.uns.ac.id",
      "name": "Alifiana Rahma Sari",
      "nim": "I0320008",
      "angkatan": 2020
    },
    {
      "no": 81,
      "email": "angela.mutiaraputi@student.uns.ac.id",
      "name": "Angela Regine Mutiaraputi",
      "nim": "I0320009",
      "angkatan": 2020
    },
    {
      "no": 82,
      "email": "anisa.sulistyani_16@student.uns.ac.id",
      "name": "Anisa Sulistyaningsih",
      "nim": "I0320010",
      "angkatan": 2020
    },
    {
      "no": 83,
      "email": "aratiakiana.p@student.uns.ac.id",
      "name": "Aratia Kiana Piandhani",
      "nim": "I0320011",
      "angkatan": 2020
    },
    {
      "no": 84,
      "email": "ardaneshwaragea@student.uns.ac.id",
      "name": "Ardaneshwara Gea",
      "nim": "I0320012",
      "angkatan": 2020
    },
    {
      "no": 85,
      "email": "athallahkuranityo@student.uns.ac.id",
      "name": "Athallah Naufal Kur'anityo",
      "nim": "I0320013",
      "angkatan": 2020
    },
    {
      "no": 86,
      "email": "audreyalexandra@student.uns.ac.id",
      "name": "Audrey Alexandra",
      "nim": "I0320014",
      "angkatan": 2020
    },
    {
      "no": 87,
      "email": "ayufiriyal@student.uns.ac.id",
      "name": "Ayu Firiyal Maharani",
      "nim": "I0320015",
      "angkatan": 2020
    },
    {
      "no": 88,
      "email": "bagussusila95@student.uns.ac.id",
      "name": "Bagus Susila",
      "nim": "I0320016",
      "angkatan": 2020
    },
    {
      "no": 89,
      "email": "bonang@student.uns.ac.id",
      "name": "Bonang Respati Satmoko",
      "nim": "I0320018",
      "angkatan": 2020
    },
    {
      "no": 90,
      "email": "candrika18@student.uns.ac.id",
      "name": "Candrika Dewi",
      "nim": "I0320019",
      "angkatan": 2020
    },
    {
      "no": 91,
      "email": "cita.sakti@student.uns.ac.id",
      "name": "Cita Tri Cahaya Sakti",
      "nim": "I0320020",
      "angkatan": 2020
    },
    {
      "no": 92,
      "email": "danendradani@student.uns.ac.id",
      "name": "Danendra Dimas Aryasatya",
      "nim": "I0320022",
      "angkatan": 2020
    },
    {
      "no": 93,
      "email": "denny_1610@student.uns.ac.id",
      "name": "Denny Surya Pratama",
      "nim": "I0320024",
      "angkatan": 2020
    },
    {
      "no": 94,
      "email": "desyanartn02@student.uns.ac.id",
      "name": "Desyana Ratna Pinasthi",
      "nim": "I0320025",
      "angkatan": 2020
    },
    {
      "no": 95,
      "email": "dheanaomi21@student.uns.ac.id",
      "name": "Dhea naomi kenlaksita",
      "nim": "I0320026",
      "angkatan": 2020
    },
    {
      "no": 96,
      "email": "dhiaul_amar@student.uns.ac.id",
      "name": "Dhiaul Amar Naufal",
      "nim": "I0320027",
      "angkatan": 2020
    },
    {
      "no": 97,
      "email": "divanayumi13@student.uns.ac.id",
      "name": "Divana Nayumi Lucky Pratama",
      "nim": "I0320028",
      "angkatan": 2020
    },
    {
      "no": 98,
      "email": "dwi.zaki.123@student.uns.ac.id",
      "name": "Dwi Zaki Nurfaizi",
      "nim": "I0320029",
      "angkatan": 2020
    },
    {
      "no": 99,
      "email": "efasetyaningsih2001@student.uns.ac.id",
      "name": "Efa Setyaningsih",
      "nim": "I0320030",
      "angkatan": 2020
    },
    {
      "no": 100,
      "email": "elisasuitela02@student.uns.ac.id",
      "name": "Elisa Melodian Charista Suitela",
      "nim": "I0320031",
      "angkatan": 2020
    },
    {
      "no": 101,
      "email": "elzanaomi@student.uns.ac.id",
      "name": "Elza Naomi Alifah Zain",
      "nim": "I0320032",
      "angkatan": 2020
    },
    {
      "no": 102,
      "email": "nurseptianierika1@student.uns.ac.id",
      "name": "Erika Nur Septiani",
      "nim": "I0320033",
      "angkatan": 2020
    },
    {
      "no": 103,
      "email": "erlindamadiastuti@student.uns.ac.id",
      "name": "Erlinda Madiastuti Nur Hafifah",
      "nim": "I0320034",
      "angkatan": 2020
    },
    {
      "no": 104,
      "email": "Ervizal14@student.uns.ac.id",
      "name": "Ervizal Buana Jatiputra",
      "nim": "I0320035",
      "angkatan": 2020
    },
    {
      "no": 105,
      "email": "erysaputri@student.uns.ac.id",
      "name": "Erysa Putri Vara Afifa",
      "nim": "I0320036",
      "angkatan": 2020
    },
    {
      "no": 106,
      "email": "nathania275@student.uns.ac.id",
      "name": "Evelyn Nathania",
      "nim": "I0320037",
      "angkatan": 2020
    },
    {
      "no": 107,
      "email": "fadhiladiah.ap@student.uns.ac.id",
      "name": "Fadhila Diah Ayu Pratiwi",
      "nim": "I0320038",
      "angkatan": 2020
    },
    {
      "no": 108,
      "email": "fahruddinari@student.uns.ac.id",
      "name": "Fahruddin Ari Wicaksono",
      "nim": "I0320039",
      "angkatan": 2020
    },
    {
      "no": 109,
      "email": "fajrinhdy@student.uns.ac.id",
      "name": "Fajri Nur Hidayah",
      "nim": "I0320040",
      "angkatan": 2020
    },
    {
      "no": 110,
      "email": "attarrahman461@student.uns.ac.id",
      "name": "Fariduddin Attar Rahman",
      "nim": "I0320041",
      "angkatan": 2020
    },
    {
      "no": 111,
      "email": "hafidmaulana02@student.uns.ac.id",
      "name": "Hafif Maulana Yunizar",
      "nim": "I0320043",
      "angkatan": 2020
    },
    {
      "no": 112,
      "email": "Halidya671@student.uns.ac.id",
      "name": "Halidya siti hanifah",
      "nim": "I0320044",
      "angkatan": 2020
    },
    {
      "no": 113,
      "email": "brahmanaharry18@student.uns.ac.id",
      "name": "Harry Brahmana",
      "nim": "I0320045",
      "angkatan": 2020
    },
    {
      "no": 114,
      "email": "hasanravi03@student.uns.ac.id",
      "name": "Hasan Ravi Rahmatullah",
      "nim": "I0320046",
      "angkatan": 2020
    },
    {
      "no": 115,
      "email": "hasnarifkya31@student.uns.ac.id",
      "name": "Hasna Rifky Afifah",
      "nim": "I0320047",
      "angkatan": 2020
    },
    {
      "no": 116,
      "email": "hilmymaqil@student.uns.ac.id",
      "name": "Hilmy Muhammad Aqil",
      "nim": "I0320048",
      "angkatan": 2020
    },
    {
      "no": 117,
      "email": "ayuratuputrimaha@student.uns.ac.id",
      "name": "I Gusti Ayu Ratu Putri Maharani",
      "nim": "I0320049",
      "angkatan": 2020
    },
    {
      "no": 118,
      "email": "iffaazzahraf@student.uns.ac.id",
      "name": "Iffa Azzahra Firdaus",
      "nim": "I0320050",
      "angkatan": 2020
    },
    {
      "no": 119,
      "email": "ilhamfairuzaman99@student.uns.ac.id",
      "name": "Ilham Fairuzaman",
      "nim": "I0320051",
      "angkatan": 2020
    },
    {
      "no": 120,
      "email": "ilhamm.maulanaa28@student.uns.ac.id",
      "name": "Ilham Maulana Nur Afani",
      "nim": "I0320052",
      "angkatan": 2020
    },
    {
      "no": 121,
      "email": "issacianmutiara@student.uns.ac.id",
      "name": "Issacian Mutiara Paska",
      "nim": "I0320053",
      "angkatan": 2020
    },
    {
      "no": 122,
      "email": "Ivanindra_05@student.uns.ac.id",
      "name": "Ivanindra Rizky Pratama",
      "nim": "I0320054",
      "angkatan": 2020
    },
    {
      "no": 123,
      "email": "larasfadani@student.uns.ac.id",
      "name": "Larasati Fadhilah Adani",
      "nim": "I0320055",
      "angkatan": 2020
    },
    {
      "no": 124,
      "email": "mirayunisaamalia@student.uns.ac.id",
      "name": "Mira Yunisa Amalia",
      "nim": "I0320057",
      "angkatan": 2020
    },
    {
      "no": 125,
      "email": "hazelbelhaz@student.uns.ac.id",
      "name": "Moch. Abel Alambana Arthasyach",
      "nim": "I0320058",
      "angkatan": 2020
    },
    {
      "no": 126,
      "email": "ahnaf.muhammad19@student.uns.ac.id",
      "name": "Muhammad Ahnaf Hafidz",
      "nim": "I0320060",
      "angkatan": 2020
    },
    {
      "no": 127,
      "email": "firnasafin.af@student.uns.ac.id",
      "name": "Muhammad Firnas Balisca Putra",
      "nim": "I0320063",
      "angkatan": 2020
    },
    {
      "no": 128,
      "email": "mha.hafiz@student.uns.ac.id",
      "name": "Muhammad Hafiz Aditya",
      "nim": "I0320064",
      "angkatan": 2020
    },
    {
      "no": 129,
      "email": "hafizhrafi@student.uns.ac.id",
      "name": "Muhammad Hafizh Rafi Susanto",
      "nim": "I0320065",
      "angkatan": 2020
    },
    {
      "no": 130,
      "email": "Mjefrisaputra@student.uns.ac.id",
      "name": "Muhammad Jefri Saputra",
      "nim": "I0320066",
      "angkatan": 2020
    },
    {
      "no": 131,
      "email": "renggasm@student.uns.ac.id",
      "name": "Muhammad Rengga Setya Marliansyah",
      "nim": "I0320069",
      "angkatan": 2020
    },
    {
      "no": 132,
      "email": "safafnan@student.uns.ac.id",
      "name": "Muhammad Safely Afnan",
      "nim": "I0320070",
      "angkatan": 2020
    },
    {
      "no": 133,
      "email": "Nadiyasalma@student.uns.ac.id",
      "name": "Nadiya Salma Rosyida",
      "nim": "I0320071",
      "angkatan": 2020
    },
    {
      "no": 134,
      "email": "nandyaindah8@student.uns.ac.id",
      "name": "Nadya Indah Arifin",
      "nim": "I0320072",
      "angkatan": 2020
    },
    {
      "no": 135,
      "email": "naristanerivadila@student.uns.ac.id",
      "name": "Narista Neri Vadila",
      "nim": "I0320073",
      "angkatan": 2020
    },
    {
      "no": 136,
      "email": "nauvalhernandoko@student.uns.ac.id",
      "name": "Nauval Hernandoko",
      "nim": "I0320075",
      "angkatan": 2020
    },
    {
      "no": 137,
      "email": "nurkimahardika@student.uns.ac.id",
      "name": "Nurki Putra Mahardika",
      "nim": "I0320076",
      "angkatan": 2020
    },
    {
      "no": 138,
      "email": "oktavianusauwdri@student.uns.ac.id",
      "name": "Oktavianus Auwdri",
      "nim": "I0320077",
      "angkatan": 2020
    },
    {
      "no": 139,
      "email": "pravanastarian_21@student.uns.ac.id",
      "name": "Pravanasta Rian Setiawan",
      "nim": "I0320078",
      "angkatan": 2020
    },
    {
      "no": 140,
      "email": "rafiudojat123@student.uns.ac.id",
      "name": "Rafi'ud Darojat",
      "nim": "I0320079",
      "angkatan": 2020
    },
    {
      "no": 141,
      "email": "raflirdwn@student.uns.ac.id",
      "name": "Rafli Ridwan Ramadhan",
      "nim": "I0320080",
      "angkatan": 2020
    },
    {
      "no": 142,
      "email": "rararastyasa@student.uns.ac.id",
      "name": "Rahma Anggana Rarastyasa",
      "nim": "I0320081",
      "angkatan": 2020
    },
    {
      "no": 143,
      "email": "rahmanifebrihana17@student.uns.ac.id",
      "name": "Rahmani Febrihana Mustari Samberbori",
      "nim": "I0320082",
      "angkatan": 2020
    },
    {
      "no": 144,
      "email": "rahmather@student.uns.ac.id",
      "name": "rahmat herpradipto",
      "nim": "I0320083",
      "angkatan": 2020
    },
    {
      "no": 145,
      "email": "raysaarma@student.uns.ac.id",
      "name": "Raysa Arma Mutiarani",
      "nim": "I0320084",
      "angkatan": 2020
    },
    {
      "no": 146,
      "email": "murwatiretno7@student.uns.ac.id",
      "name": "Retno Murwati",
      "nim": "I0320085",
      "angkatan": 2020
    },
    {
      "no": 147,
      "email": "rizalrasyadan03@student.uns.ac.id",
      "name": "Rizal Rasyadan Harijadi",
      "nim": "I0320086",
      "angkatan": 2020
    },
    {
      "no": 148,
      "email": "rizkyammar@student.uns.ac.id",
      "name": "Rizky Ammar Surya Saputra",
      "nim": "I0320087",
      "angkatan": 2020
    },
    {
      "no": 149,
      "email": "ryanhikmah@student.uns.ac.id",
      "name": "Ryan Hikmah Fadilla",
      "nim": "I0320088",
      "angkatan": 2020
    },
    {
      "no": 150,
      "email": "salmaardelia24@student.uns.ac.id",
      "name": "Salma Ardelia Irfani",
      "nim": "I0320090",
      "angkatan": 2020
    },
    {
      "no": 151,
      "email": "sasaregina06@student.uns.ac.id",
      "name": "Salsabila Putri Regina",
      "nim": "I0320091",
      "angkatan": 2020
    },
    {
      "no": 152,
      "email": "slablarana12@student.uns.ac.id",
      "name": "Salsabila Rana Fadhilah",
      "nim": "I0320092",
      "angkatan": 2020
    },
    {
      "no": 153,
      "email": "sekarsalsabilaaa@student.uns.ac.id",
      "name": "Sekar Salsabila Santosa",
      "nim": "I0320093",
      "angkatan": 2020
    },
    {
      "no": 154,
      "email": "sekarzaneta@student.uns.ac.id",
      "name": "Sekar Zaneta Amirulputri",
      "nim": "I0320094",
      "angkatan": 2020
    },
    {
      "no": 155,
      "email": "sonywicaksono@student.uns.ac.id",
      "name": "Sony Wicaksono",
      "nim": "I0320095",
      "angkatan": 2020
    },
    {
      "no": 156,
      "email": "stefanycaesarya@student.uns.ac.id",
      "name": "Stefany Caesarya Permatasari",
      "nim": "I0320096",
      "angkatan": 2020
    },
    {
      "no": 157,
      "email": "sylviactyas520@student.uns.ac.id",
      "name": "Sylvia Cahyaningtyas",
      "nim": "I0320098",
      "angkatan": 2020
    },
    {
      "no": 158,
      "email": "talithaprnst@student.uns.ac.id",
      "name": "Talitha Pranastiti",
      "nim": "I0320099",
      "angkatan": 2020
    },
    {
      "no": 159,
      "email": "tazkiyamutia@student.uns.ac.id",
      "name": "Tazkiya Mutia Yogasani",
      "nim": "I0320100",
      "angkatan": 2020
    },
    {
      "no": 160,
      "email": "perwirayudhaa@student.uns.ac.id",
      "name": "Tito Adam Perwirayudha",
      "nim": "I0320101",
      "angkatan": 2020
    },
    {
      "no": 161,
      "email": "titussandy11@student.uns.ac.id",
      "name": "Titus Kurniawan Sandy Purwanto",
      "nim": "I0320102",
      "angkatan": 2020
    },
    {
      "no": 162,
      "email": "togarobaja@student.uns.ac.id",
      "name": "Togar Obaja Nainggolan",
      "nim": "I0320103",
      "angkatan": 2020
    },
    {
      "no": 163,
      "email": "truelyhafidz@student.uns.ac.id",
      "name": "Truely Nur Hafidz",
      "nim": "I0320104",
      "angkatan": 2020
    },
    {
      "no": 164,
      "email": "tsania.sana@student.uns.ac.id",
      "name": "Tsania Sana Az Zahra",
      "nim": "I0320105",
      "angkatan": 2020
    },
    {
      "no": 165,
      "email": "utsman@student.uns.ac.id",
      "name": "Utsman Arifin Al Fauzi",
      "nim": "I0320106",
      "angkatan": 2020
    },
    {
      "no": 166,
      "email": "vincentiaputrikhar72@student.uns.ac.id",
      "name": "Vincentia Putri Kharisma",
      "nim": "I0320107",
      "angkatan": 2020
    },
    {
      "no": 167,
      "email": "maurichkian@student.uns.ac.id",
      "name": "Vincentius Maurich Kian Mulya",
      "nim": "I0320108",
      "angkatan": 2020
    },
    {
      "no": 168,
      "email": "yolandadiandari@student.uns.ac.id",
      "name": "Yolanda Diandari",
      "nim": "I0320112",
      "angkatan": 2020
    },
    {
      "no": 169,
      "email": "rizkylawati@student.uns.ac.id",
      "name": "Yuki Rizkylawati",
      "nim": "I0320113",
      "angkatan": 2020
    },
    {
      "no": 170,
      "email": "Yukurihanjani@student.uns.ac.id",
      "name": "Yukuri Hanjani Putri",
      "nim": "I0320114",
      "angkatan": 2020
    },
    {
      "no": 171,
      "email": "chairunnisazafira11@student.uns.ac.id",
      "name": "Zafira Chairunnisa",
      "nim": "I0320115",
      "angkatan": 2020
    },
    {
      "no": 172,
      "email": "rifqiwaskita25@student.uns.ac.id",
      "name": "Ahmad Rifqi Waskita",
      "nim": "I0320118",
      "angkatan": 2020
    },
    {
      "no": 173,
      "email": "ajimanarul@student.uns.ac.id",
      "name": "Aji Manarul Aziz",
      "nim": "I0320119",
      "angkatan": 2020
    },
    {
      "no": 174,
      "email": "alfinadiva11@student.uns.ac.id",
      "name": "Alfina Diva Ramadhanty",
      "nim": "I0320120",
      "angkatan": 2020
    },
    {
      "no": 175,
      "email": "alyaramadhani@student.uns.ac.id",
      "name": "Alya Ramadhani",
      "nim": "I0320123",
      "angkatan": 2020
    },
    {
      "no": 176,
      "email": "anandawahyu223@student.uns.ac.id",
      "name": "Ananda Wahyu Nur Said",
      "nim": "I0320124",
      "angkatan": 2020
    },
  ]

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
