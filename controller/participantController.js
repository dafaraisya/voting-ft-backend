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
      No: 1,
      email: "tatraprima39@student.uns.ac.id",
      name: "Tatra Prima Baladina",
      nim: "I0517084",
      angkatan: 2017,
    },
    {
      No: 2,
      email: "valianamgrhy@student.uns.ac.id",
      name: "Valiana Mugi Rahayu",
      nim: "I0517086",
      angkatan: 2017,
    },
    {
      No: 3,
      email: "rochimalichwan@student.uns.ac.id",
      name: "Abdur Rochim Al Ichwan",
      nim: "I0518001",
      angkatan: 2018,
    },
    {
      No: 4,
      email: "anastasiadevina@student.uns.ac.id",
      name: "Anastasia Devina Damayanti",
      nim: "I0518007",
      angkatan: 2018,
    },
    {
      No: 5,
      email: "nedwin3@student.uns.ac.id",
      name: "Daniel Norman Edwin",
      nim: "I0518019",
      angkatan: 2018,
    },
    {
      No: 6,
      email: "dedekurnia@student.uns.ac.id",
      name: "Dede Kurnia Eka Putra",
      nim: "I0518020",
      angkatan: 2018,
    },
    {
      No: 7,
      email: "dsumpati14@student.uns.ac.id",
      name: "Diah Sri Umpati",
      nim: "I0518023",
      angkatan: 2018,
    },
    {
      No: 8,
      email: "agathaels7@student.uns.ac.id",
      name: "Elisa Fitriyani",
      nim: "I0518027",
      angkatan: 2018,
    },
    {
      No: 9,
      email: "Harisadekurniawan@student.uns.ac.id",
      name: "Haris Ade Kurniawan",
      nim: "I0518040",
      angkatan: 2018,
    },
    {
      No: 10,
      email: "harrypramudya17@student.uns.ac.id",
      name: "Harry Pramudya Rivelino",
      nim: "I0518041",
      angkatan: 2018,
    },
    {
      No: 11,
      email: "heviismarlina@student.uns.ac.id",
      name: "Hevi Ismarlina",
      nim: "I0518044",
      angkatan: 2018,
    },
    {
      No: 12,
      email: "Ihza_alfarisi01@student.uns.ac.id",
      name: "Ihza Aulia Alfarisi",
      nim: "I0518046",
      angkatan: 2018,
    },
    {
      No: 13,
      email: "luthfi_mursidd@student.uns.ac.id",
      name: "Luthfi Mursid Darmawan",
      nim: "I0518056",
      angkatan: 2018,
    },
    {
      No: 14,
      email: "Megatantrisekarhapsa@student.uns.ac.id",
      name: "Megatantri Sekar Hapsari",
      nim: "I0518058",
      angkatan: 2018,
    },
    {
      No: 15,
      email: "muhluthfimaulana@student.uns.ac.id",
      name: "Muhammad Luthfi Maulana",
      nim: "I0518062",
      angkatan: 2018,
    },
    {
      No: 16,
      email: "nabilfhm@student.uns.ac.id",
      name: "Nabil Fahmi",
      nim: "I0518066",
      angkatan: 2018,
    },
    {
      No: 17,
      email: "quratulaini@student.uns.ac.id",
      name: "Quratul Aini",
      nim: "I0518072",
      angkatan: 2018,
    },
    {
      No: 18,
      email: "susantobudiyp@student.uns.ac.id",
      name: "Susanto Budi Yudho Pamungkas",
      nim: "I0518080",
      angkatan: 2018,
    },
    {
      No: 19,
      email: "tsabitul.faiz99@student.uns.ac.id",
      name: "Tsabitul Faiz",
      nim: "I0518082",
      angkatan: 2018,
    },
    {
      No: 20,
      email: "windyd1999@student.uns.ac.id",
      name: "Windy Dwi Noviyanti",
      nim: "I0518088",
      angkatan: 2018,
    },
    {
      No: 21,
      email: "aldiansyahsurya@student.uns.ac.id",
      name: "Aldiansyah Surya Hadiwijaya",
      nim: "I0519012",
      angkatan: 2019,
    },
    {
      No: 22,
      email: "arifiahmp@student.uns.ac.id",
      name: "Arifiah Muflikhati Putri",
      nim: "I0519020",
      angkatan: 2019,
    },
    {
      No: 23,
      email: "dzaki.anggitoaji@student.uns.ac.id",
      name: "Dzaki Anggito Aji",
      nim: "I0519030",
      angkatan: 2019,
    },
    {
      No: 24,
      email: "Elfira.25@student.uns.ac.id",
      name: "Elfira Diah Ayu Febriani",
      nim: "I0519031",
      angkatan: 2019,
    },
    {
      No: 25,
      email: "filzahwahyuputria@student.uns.ac.id",
      name: "Filzah Wahyu Putri Andarini",
      nim: "I0519038",
      angkatan: 2019,
    },
    {
      No: 26,
      email: "gheasafiraventa@student.uns.ac.id",
      name: "Ghea Safiraventa Anggreini",
      nim: "I0519040",
      angkatan: 2019,
    },
    {
      No: 27,
      email: "ivandrejonathan11@student.uns.ac.id",
      name: "Ivandre",
      nim: "I0519048",
      angkatan: 2019,
    },
    {
      No: 28,
      email: "listia_29@student.uns.ac.id",
      name: "Listia Aulia Ruwaidah",
      nim: "I0519054",
      angkatan: 2019,
    },
    {
      No: 29,
      email: "lusiacalinda@student.uns.ac.id",
      name: "Lusia Calinda Paska Aprita",
      nim: "I0519055",
      angkatan: 2019,
    },
    {
      No: 30,
      email: "monikameiliaa@student.uns.ac.id",
      name: "Monika Meilia Puspaningtyas",
      nim: "I0519057",
      angkatan: 2019,
    },
    {
      No: 31,
      email: "farhanabrar12@student.uns.ac.id",
      name: "Muhammad Farhan Abrar",
      nim: "I0519061",
      angkatan: 2019,
    },
    {
      No: 32,
      email: "puanhemas@student.uns.ac.id",
      name: "Puan Hemas D",
      nim: "I0519076",
      angkatan: 2019,
    },
    {
      No: 33,
      email: "adeliayuniati@student.uns.ac.id",
      name: "Adelia Yuniati",
      nim: "I0520001",
      angkatan: 2020,
    },
    {
      No: 34,
      email: "hanindhiaadifa@student.uns.ac.id",
      name: "Adifa Hanindhia Rahma",
      nim: "I0520002",
      angkatan: 2020,
    },
    {
      No: 35,
      email: "adlinaherlian@student.uns.ac.id",
      name: "Adlina Herlian Kuntari Dewi",
      nim: "I0520003",
      angkatan: 2020,
    },
    {
      No: 36,
      email: "friibays@student.uns.ac.id",
      name: "Afrianto Bayu Setyono",
      nim: "I0520004",
      angkatan: 2020,
    },
    {
      No: 37,
      email: "anitaabudii@student.uns.ac.id",
      name: "anita budi krisnawati",
      nim: "I0520006",
      angkatan: 2020,
    },
    {
      No: 38,
      email: "aprilia.p.putri.31@student.uns.ac.id",
      name: "Aprilia Prabowo Andrias Putri",
      nim: "I0520007",
      angkatan: 2020,
    },
    {
      No: 39,
      email: "aqilaputrir11@student.uns.ac.id",
      name: "Aqila Putri Ramadhani",
      nim: "I0520008",
      angkatan: 2020,
    },
    {
      No: 40,
      email: "ariadindraputra@student.uns.ac.id",
      name: "Ariadi Indra Putra",
      nim: "I0520009",
      angkatan: 2020,
    },
    {
      No: 41,
      email: "arin.kurniasari01@student.uns.ac.id",
      name: "Arin Kurniasari",
      nim: "I0520010",
      angkatan: 2020,
    },
    {
      No: 42,
      email: "arindaputri@student.uns.ac.id",
      name: "Arinda Putri Dwi Wulandari",
      nim: "I0520011",
      angkatan: 2020,
    },
    {
      No: 43,
      email: "arvianradityaa@student.uns.ac.id",
      name: "Arvian Raditya Airlangga",
      nim: "I0520013",
      angkatan: 2020,
    },
    {
      No: 44,
      email: "audreycandra28@student.uns.ac.id",
      name: "Audrey Vista Candra Dewi",
      nim: "I0520014",
      angkatan: 2020,
    },
    {
      No: 45,
      email: "bin.ramadhan301@student.uns.ac.id",
      name: "Bintang Ramadhan",
      nim: "I0520015",
      angkatan: 2020,
    },
    {
      No: 46,
      email: "burhanuddinpratama88@student.uns.ac.id",
      name: "Burhanuddin Yusuf Pratama",
      nim: "I0520016",
      angkatan: 2020,
    },
    {
      No: 47,
      email: "chrsquinta08@student.uns.ac.id",
      name: "Christella Quinta Pranasita",
      nim: "I0520017",
      angkatan: 2020,
    },
    {
      No: 48,
      email: "espinadea@student.uns.ac.id",
      name: "Dea Espina Banowati",
      nim: "I0520018",
      angkatan: 2020,
    },
    {
      No: 49,
      email: "denikurniawan306@student.uns.ac.id",
      name: "Deni Kurniawan",
      nim: "I0520019",
      angkatan: 2020,
    },
    {
      No: 50,
      email: "denisdanabhanazis@student.uns.ac.id",
      name: "Denisda Nabhan Azis",
      nim: "I0520020",
      angkatan: 2020,
    },
    {
      No: 51,
      email: "dhitaayupramesthi@student.uns.ac.id",
      name: "Dhita Ayu Pramesthi",
      nim: "I0520021",
      angkatan: 2020,
    },
    {
      No: 52,
      email: "difa282001@student.uns.ac.id",
      name: "Difa Aulia Majid",
      nim: "I0520023",
      angkatan: 2020,
    },
    {
      No: 53,
      email: "divandasekarrnty@student.uns.ac.id",
      name: "Divanda Sekar Rahayu Ningtyas",
      nim: "I0520024",
      angkatan: 2020,
    },
    {
      No: 54,
      email: "elsamarshella@student.uns.ac.id",
      name: "Elsa Marshella",
      nim: "I0520025",
      angkatan: 2020,
    },
    {
      No: 55,
      email: "Elsankamal21@student.uns.ac.id",
      name: "Elsan Maula Kamal",
      nim: "I0520026",
      angkatan: 2020,
    },
    {
      No: 56,
      email: "fadzilla_270702@student.uns.ac.id",
      name: "Fadzilla Zahra Resita",
      nim: "I0520028",
      angkatan: 2020,
    },
    {
      No: 57,
      email: "rezi.daffa04@student.uns.ac.id",
      name: "Fahrezi Daffa Warastama",
      nim: "I0520029",
      angkatan: 2020,
    },
    {
      No: 58,
      email: "fatihaalya2002@student.uns.ac.id",
      name: "Fatiha Alya Riswanda",
      nim: "I0520033",
      angkatan: 2020,
    },
    {
      No: 59,
      email: "Fauziasukma_02@student.uns.ac.id",
      name: "Fauzia Sukma Malinda",
      nim: "I0520034",
      angkatan: 2020,
    },
    {
      No: 60,
      email: "fretty_lambangw@student.uns.ac.id",
      name: "Fretty Lambang Wibawati",
      nim: "I0520035",
      angkatan: 2020,
    },
    {
      No: 61,
      email: "gemaniaanandaf@student.uns.ac.id",
      name: "Gemania Ananda Fitri",
      nim: "I0520036",
      angkatan: 2020,
    },
    {
      No: 62,
      email: "gentahuda@student.uns.ac.id",
      name: "Genta Huda Fauzan",
      nim: "I0520037",
      angkatan: 2020,
    },
    {
      No: 63,
      email: "penataaji48@student.uns.ac.id",
      name: "ginanjar penata aji",
      nim: "I0520042",
      angkatan: 2020,
    },
    {
      No: 64,
      email: "hawichetech13@student.uns.ac.id",
      name: "Harya Muhammad Wijaya",
      nim: "I0520045",
      angkatan: 2020,
    },
    {
      No: 65,
      email: "hauraranazhafirah@student.uns.ac.id",
      name: "Haura Rana Zhafirah",
      nim: "I0520046",
      angkatan: 2020,
    },
    {
      No: 66,
      email: "maulana_ibnu42@student.uns.ac.id",
      name: "Ibnu Maulana",
      nim: "I0520047",
      angkatan: 2020,
    },
    {
      No: 67,
      email: "tryansaribnu@student.uns.ac.id",
      name: "Ibnu Tryansar Purba",
      nim: "I0520048",
      angkatan: 2020,
    },
    {
      No: 68,
      email: "Ilham_novitra16@student.uns.ac.id",
      name: "Ilham Novitra",
      nim: "I0520049",
      angkatan: 2020,
    },
    {
      No: 69,
      email: "imamfadhil977@student.uns.ac.id",
      name: "Imam Fadhil Ihsani",
      nim: "I0520050",
      angkatan: 2020,
    },
    {
      No: 70,
      email: "kailaisyatir_15@student.uns.ac.id",
      name: "Kaila Isyatirrodhiyah",
      nim: "I0520054",
      angkatan: 2020,
    },
    {
      No: 71,
      email: "Kalimaya_qsani@student.uns.ac.id",
      name: "Kalimaya Qolbi Sani",
      nim: "I0520055",
      angkatan: 2020,
    },
    {
      No: 72,
      email: "Kurniawanmega887@student.uns.ac.id",
      name: "Kurniawan Mega Santoso",
      nim: "I0520057",
      angkatan: 2020,
    },
    {
      No: 73,
      email: "lauraaprian@student.uns.ac.id",
      name: "Laura Hanifa Aprian",
      nim: "I0520058",
      angkatan: 2020,
    },
    {
      No: 74,
      email: "mrayhansyahps@student.uns.ac.id",
      name: "Muhammad Rayhansyah Putra Setiawan",
      nim: "I0520059",
      angkatan: 2020,
    },
    {
      No: 75,
      email: "mahirasyevarani@student.uns.ac.id",
      name: "Mahira Noor Syevarani Arivandi",
      nim: "I0520060",
      angkatan: 2020,
    },
    {
      No: 76,
      email: "milal.maliha01@student.uns.ac.id",
      name: "Malihatul Milal",
      nim: "I0520061",
      angkatan: 2020,
    },
    {
      No: 77,
      email: "maysafa010502@student.uns.ac.id",
      name: "Maysafa Agung Robani",
      nim: "I0520063",
      angkatan: 2020,
    },
    {
      No: 78,
      email: "mohammadsyafiq@student.uns.ac.id",
      name: "Mohammad Syafiq Alika Putra",
      nim: "I0520065",
      angkatan: 2020,
    },
    {
      No: 79,
      email: "malvinsofyan@student.uns.ac.id",
      name: "Muhammad Alvin Sofyan",
      nim: "I0520068",
      angkatan: 2020,
    },
    {
      No: 80,
      email: "darul.isnain.123@student.uns.ac.id",
      name: "Muhammad Darul Isnain",
      nim: "I0520069",
      angkatan: 2020,
    },
    {
      No: 81,
      email: "milhzky@student.uns.ac.id",
      name: "Muhammad Ilham Rizky Putra",
      nim: "I0520071",
      angkatan: 2020,
    },
    {
      No: 82,
      email: "Reza.maulana_1907@student.uns.ac.id",
      name: "Muhammad Reza Maulana",
      nim: "I0520072",
      angkatan: 2020,
    },
    {
      No: 83,
      email: "muhammadrizalutama@student.uns.ac.id",
      name: "Muhammad Rizal Utama",
      nim: "I0520073",
      angkatan: 2020,
    },
    {
      No: 84,
      email: "mshabibi34@student.uns.ac.id",
      name: "Muhammad Sholahuddin Habibi",
      nim: "I0520075",
      angkatan: 2020,
    },
    {
      No: 85,
      email: "mthhsyafag@student.uns.ac.id",
      name: "Muthi'ah Syafa Gustian",
      nim: "I0520077",
      angkatan: 2020,
    },
    {
      No: 86,
      email: "nabilafathiyya446@student.uns.ac.id",
      name: "Nabila Fathiyya Nugrahatami",
      nim: "I0520078",
      angkatan: 2020,
    },
    {
      No: 87,
      email: "natasyayolaa@student.uns.ac.id",
      name: "Natasya Yola Ferdilla",
      nim: "I0520079",
      angkatan: 2020,
    },
    {
      No: 88,
      email: "novanaldian240@student.uns.ac.id",
      name: "Novan Aldian Rahmadan Putra",
      nim: "I0520083",
      angkatan: 2020,
    },
    {
      No: 89,
      email: "novitasarizita@student.uns.ac.id",
      name: "Novitasari Zita Primaresti",
      nim: "I0520084",
      angkatan: 2020,
    },
    {
      No: 90,
      email: "nursayekti@student.uns.ac.id",
      name: "Nur Sayekti",
      nim: "I0520085",
      angkatan: 2020,
    },
    {
      No: 91,
      email: "tamtam.vhaliha@student.uns.ac.id",
      name: "Pratama Vhaliha Shihabuddin",
      nim: "I0520086",
      angkatan: 2020,
    },
    {
      No: 92,
      email: "putriatikalestari@student.uns.ac.id",
      name: "Putri Atika Lestari",
      nim: "I0520088",
      angkatan: 2020,
    },
    {
      No: 93,
      email: "rahmafitrinaryani@student.uns.ac.id",
      name: "Rahma Fitri Naryani",
      nim: "I0520089",
      angkatan: 2020,
    },
    {
      No: 94,
      email: "raihanalamsyah@student.uns.ac.id",
      name: "Raihan Alamsyah",
      nim: "I0520090",
      angkatan: 2020,
    },
    {
      No: 95,
      email: "refaput31@student.uns.ac.id",
      name: "Reyza Fachrezy Putra",
      nim: "I0520091",
      angkatan: 2020,
    },
    {
      No: 96,
      email: "rezapratamaaditia@student.uns.ac.id",
      name: "Reza Pratama Aditia",
      nim: "I0520092",
      angkatan: 2020,
    },
    {
      No: 97,
      email: "rizallutfi316@student.uns.ac.id",
      name: "Rizal Lutfi Hendi Yulianto",
      nim: "I0520093",
      angkatan: 2020,
    },
    {
      No: 98,
      email: "rizkyrahmaniaf@student.uns.ac.id",
      name: "Rizky Rahmania Fatimah",
      nim: "I0520094",
      angkatan: 2020,
    },
    {
      No: 99,
      email: "rihhadtl13@student.uns.ac.id",
      name: "Rizq Rihhadatul Aisyrifqi",
      nim: "I0520095",
      angkatan: 2020,
    },
    {
      No: 100,
      email: "rohmatulfirda@student.uns.ac.id",
      name: "Rohmatul Firda Wardani",
      nim: "I0520096",
      angkatan: 2020,
    },
    {
      No: 101,
      email: "sabelasr@student.uns.ac.id",
      name: "Sabela Sanata Ramadhani",
      nim: "I0520098",
      angkatan: 2020,
    },
    {
      No: 102,
      email: "salshabilanadya@student.uns.ac.id",
      name: "Salshabila Nadya Putri Permana",
      nim: "I0520099",
      angkatan: 2020,
    },
    {
      No: 103,
      email: "sariayudwilestari@student.uns.ac.id",
      name: "Sari Ayu Dwi Lestari",
      nim: "I0520101",
      angkatan: 2020,
    },
    {
      No: 104,
      email: "sesa@student.uns.ac.id",
      name: "Sesanti Maharani",
      nim: "I0520102",
      angkatan: 2020,
    },
    {
      No: 105,
      email: "sesiliasembiring@student.uns.ac.id",
      name: "Sesilia Bella Sembiring",
      nim: "I0520103",
      angkatan: 2020,
    },
    {
      No: 106,
      email: "shofiatulroyani94@student.uns.ac.id",
      name: "Shofiatul Royani",
      nim: "I0520106",
      angkatan: 2020,
    },
    {
      No: 107,
      email: "talithafairuzs@student.uns.ac.id",
      name: "Talitha Fairuz Shafa",
      nim: "I0520107",
      angkatan: 2020,
    },
    {
      No: 108,
      email: "theodoretimotius16@student.uns.ac.id",
      name: "Theodore Timotius",
      nim: "I0520109",
      angkatan: 2020,
    },
    {
      No: 109,
      email: "tsabitalthafm@student.uns.ac.id",
      name: "Tsabit Althaf Muzhaffar",
      nim: "I0520110",
      angkatan: 2020,
    },
    {
      No: 110,
      email: "tsalatsatunnisa.ns@student.uns.ac.id",
      name: "Tsalatsatun Nisa' Nur Shiyami",
      nim: "I0520111",
      angkatan: 2020,
    },
    {
      No: 111,
      email: "vanesyasalsabila@student.uns.ac.id",
      name: "vanesya salsabila",
      nim: "I0520112",
      angkatan: 2020,
    },
    {
      No: 112,
      email: "vianshi16@student.uns.ac.id",
      name: "Viana Silvia",
      nim: "I0520113",
      angkatan: 2020,
    },
    {
      No: 113,
      email: "vidhikakarisma@student.uns.ac.id",
      name: "Vidhika Karisma Putri",
      nim: "I0520114",
      angkatan: 2020,
    },
    {
      No: 114,
      email: "vienakhalila@student.uns.ac.id",
      name: "Viena Hilma Khalila",
      nim: "I0520115",
      angkatan: 2020,
    },
    {
      No: 115,
      email: "visca.cahya@student.uns.ac.id",
      name: "Visca Cahya Mulya Anggraini",
      nim: "I0520117",
      angkatan: 2020,
    },
    {
      No: 116,
      email: "widyawachidah354@student.uns.ac.id",
      name: "Widya Astuti Nur Wachidah",
      nim: "I0520118",
      angkatan: 2020,
    },
    {
      No: 117,
      email: "zahrafadhila@student.uns.ac.id",
      name: "Zahra Fadhila Kairunnisa",
      nim: "I0520119",
      angkatan: 2020,
    },
    {
      No: 118,
      email: "zahrani.afis1@student.uns.ac.id",
      name: "Zahrani Putri Nabilla",
      nim: "I0520120",
      angkatan: 2020,
    },
    {
      No: 119,
      email: "zidanfauzi@student.uns.ac.id",
      name: "Zidan Insa Fauzi",
      nim: "I0520121",
      angkatan: 2020,
    },
    {
      No: 120,
      email: "akbarsigitsucahyo@student.uns.ac.id",
      name: "Akbar Sigit Sucahyo",
      nim: "I0520122",
      angkatan: 2020,
    },
    {
      No: 121,
      email: "ameliyamaharani@student.uns.ac.id",
      name: "Ameliya Maharani",
      nim: "I0520124",
      angkatan: 2020,
    },
    {
      No: 122,
      email: "septia20intan@student.uns.ac.id",
      name: "Intan Septiya",
      nim: "I0519047",
      angkatan: 2019,
    },
  ];

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.email = _participant.email;
    participant.session.id = "5fd5b3e48430463e5853f061";
    participant.session.number = 1;
    participant.session.min = new Date("2020-12-06T08:00:00.000Z");
    participant.session.max = new Date("2020-12-15T14:00:00.000Z");

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
