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
  "36.73.209.231",
  "36.81.10.12",
  "180.252.99.137",
  "112.215.240.127",
  "202.80.218.42",
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
      "name": "A'isyah Azhari",
      "nim": "D0119001",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "aisyahazhari94@student.uns.ac.id"
    },
    {
      "name": "Abiyu Raihan Hanif",
      "nim": "D0118002",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "abiyuraihan66@student.uns.ac.id"
    },
    {
      "name": "Achmad Wahyu Mochtar",
      "nim": "D0119002",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "achmadwahyumochtar@student.uns.ac.id"
    },
    {
      "name": "Ade Nuri Septiana",
      "nim": "D0119003",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "adenuri59@student.uns.ac.id"
    },
    {
      "name": "Adhisty Septianda Karya Putri",
      "nim": "D0120001",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "adhistyseptianda@student.uns.ac.id"
    },
    {
      "name": "Aditia Permana Aji",
      "nim": "D0120002",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "aditiaapa29@student.uns.ac.id"
    },
    {
      "name": "Afifah Dhea Damayanti",
      "nim": "D0119005",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "afifahdhea11@student.uns.ac.id"
    },
    {
      "name": "Agnes Ardiani",
      "nim": "D0119006",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "agnesardiani@student.uns.ac.id"
    },
    {
      "name": "Agung Prasetyo",
      "nim": "D0118003",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "agungprasety@student.uns.ac.id"
    },
    {
      "name": "Agus Tina Isni Yatun",
      "nim": "D0119007",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "agustinaisniy@student.uns.ac.id"
    },
    {
      "name": "Agustina Ekawati",
      "nim": "D0119008",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "agustinaeka@student.uns.ac.id"
    },
    {
      "name": "Agustine Carla Amelinda",
      "nim": "D0118004",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "agustinecarla_2808@student.uns.ac.id"
    },
    {
      "name": "Ahlul Wursita Kumar",
      "nim": "D0119009",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "ahlulwursitakumar@student.uns.ac.id"
    },
    {
      "name": "Ahmad Zakki Abdullah",
      "nim": "D0118005",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Zakkiabdullah6@student.uns.ac.id"
    },
    {
      "name": "Aldova Bagus Ferryawan",
      "nim": "D0118006",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "aldovabagusferryawan@gmail.com"
    },
    {
      "name": "Alfia Nur Annisa",
      "nim": "D0118007",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "alfianur024@student.uns.ac.id"
    },
    {
      "name": "Alfin Anugrah PV",
      "nim": "D0118008",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "alfinanugrah07@student.uns.ac.id"
    },
    {
      "name": "Alfina Wijayanti",
      "nim": "D0120003",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "alfinawijayanti11@student.uns.ac.id"
    },
    {
      "name": "Alfina yufastita",
      "nim": "D0119010",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "yufastita@student.uns.ac id"
    },
    {
      "name": "Alia Rahmatillah",
      "nim": "D0119011",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "aliarahmatiilah@student.uns.ac.id"
    },
    {
      "name": "Almahdi Dwita Purnama",
      "nim": "D0120004",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "almahdipurnama123@student.uns.ac.id"
    },
    {
      "name": "alvian rahmadhany wahyono",
      "nim": "D0120005",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "alvianrahmadhany@student.uns.ac.id"
    },
    {
      "name": "Alya Sekar Kinasih",
      "nim": "D0119013",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "Alyasekarr_24@student.uns.ac.id"
    },
    {
      "name": "Amelia Christiani",
      "nim": "D0118012",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "ameliachristiani@student.ac.id"
    },
    {
      "name": "Anastasya Wahyu Puspitasari",
      "nim": "D0119014",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "anastasya123@student.uns.ac.id"
    },
    {
      "name": "Anggie Desriantika Prabandari",
      "nim": "D0119015",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "anggiedesri2000@student.uns.ac.id"
    },
    {
      "name": "Ani s",
      "nim": "D0118014",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "ani16blog@student.uns.ac.id"
    },
    {
      "name": "Anisa Desianti Ramadhani",
      "nim": "D0118015",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "desiantianisa118@student.uns.ac.id"
    },
    {
      "name": "Anisa Dwi Rahmawati",
      "nim": "D0120007",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "anisarhm2507@student.uns.ac.id"
    },
    {
      "name": "Annisa Alya Rahmawati",
      "nim": "D0119016",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "anisaalea2016@student.uns.ac.id"
    },
    {
      "name": "Annisa Fadhilla Azza",
      "nim": "D0119017",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "annisaazza3@student.uns.ac.id"
    },
    {
      "name": "Annisa Mulya Asyafa'ah",
      "nim": "D0118016",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "aasyafaah@student.uns.ac.id"
    },
    {
      "name": "Annisa Salsa Bila Arifah",
      "nim": "D0119018",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "annisasba37@student.uns.ac.id"
    },
    {
      "name": "Annisa Wida Nur Regita",
      "nim": "D0119019",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "annisawida@student.uns.ac.id"
    },
    {
      "name": "Aprilia Anggi Permatasari",
      "nim": "D0118017",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "apriliaanggip10@student.uns.ac.id"
    },
    {
      "name": "Astri Nariswari",
      "nim": "D0119021",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "astrinrswr@student.uns.ac.id"
    },
    {
      "name": "Astrid Sofia Ratri Pramudita",
      "nim": "D0120010",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "ratri.pramudita8@student.uns.ac.id"
    },
    {
      "name": "Athaya Zahra",
      "nim": "D0120011",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "athayazhr@student.uns.ac.id"
    },
    {
      "name": "ATI DINA NASICHA",
      "nim": "D0120012",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "atidina@student.uns.ac.id"
    },
    {
      "name": "Aulia billqis",
      "nim": "D0118018",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "auliabillqis@student.uns.ac.id"
    },
    {
      "name": "awab sajid",
      "nim": "d0118019",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "awabsajid@student.uns.ac.id"
    },
    {
      "name": "Bayu Prasetyo",
      "nim": "D0119022",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "bayuuns08@student.uns.ac.id"
    },
    {
      "name": "Bianca Bunga Saputra",
      "nim": "D0119023",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "Biancabsptr@student.uns.ac.id"
    },
    {
      "name": "Braninda Caesarita Trisna Putri",
      "nim": "D0118021",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "bcaesarita12@student.uns.ac.id"
    },
    {
      "name": "Candra Septian Bantara",
      "nim": "D0118022",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "candra2399@student.uns.ac.id"
    },
    {
      "name": "Chatarina Dian Pratiwi",
      "nim": "D0120013",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "chatarina@student.uns.ac.id"
    },
    {
      "name": "Cicilia Ayu Anggraini",
      "nim": "D0120014",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "ayucicil@student.uns.ac.id"
    },
    {
      "name": "Cika Rania",
      "nim": "D0119024",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "cikaraniaalyaputri@student.uns.ac.id"
    },
    {
      "name": "Cindy Amara Puspita Sari",
      "nim": "D0119025",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "cindy.amr_218@student.uns.ac.id"
    },
    {
      "name": "Cindy Novita Sari",
      "nim": "D0119026",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "cindynovii81@student.uns.ac.id"
    },
    {
      "name": "Clarisa Kusuma Wardani",
      "nim": "D0119027",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "clarisakusumawardani@student.uns.ac.id"
    },
    {
      "name": "Dania Ridayanti Kusumadewi",
      "nim": "D0119028",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "daniaridayantik291@student.uns.ac.id"
    },
    {
      "name": "Daniella Venidomine Widiananda",
      "nim": "D0119029",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "daniellvenidomine@student.uns.ac.id"
    },
    {
      "name": "david evans halomoan",
      "nim": "D0119030",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "davidevans0210@student.uns.ac.id"
    },
    {
      "name": "Defino Ryan Oddy Tama",
      "nim": "D0119031",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "definoryan11@student.uns.ac.id"
    },
    {
      "name": "Desak Made Ari Prastiti",
      "nim": "D0119032",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "desakprastiti2@student.uns.ac.id"
    },
    {
      "name": "Deswita Putri Chairani",
      "nim": "D0120017",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "deswitaputri@student.uns.ac.id"
    },
    {
      "name": "Devy Nur Cahyaningsih",
      "nim": "D0118025",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "devi.nur16@student.uns.ac.id"
    },
    {
      "name": "Diana Nurvitasari",
      "nim": "D0120018",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "diana.nurvitasari@student.uns.ac.id"
    },
    {
      "name": "Dibya Yodha Infradana",
      "nim": "D0120019",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "dibyayodha22@student.uns.ac.id"
    },
    {
      "name": "Dicky Kurniawan",
      "nim": "D0120020",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "dicky.kurniawan27@student.uns.ac.id"
    },
    {
      "name": "Didien Rizkamukti",
      "nim": "D0120021",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "didienr00@student.uns.ac.id"
    },
    {
      "name": "Dimas Oxa Setiyanto",
      "nim": "D0118026",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "dimasoxa@student.uns.ac.id"
    },
    {
      "name": "Dwi Kristiawan",
      "nim": "D0118027",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "dkristiawan@student.uns.ac.id"
    },
    {
      "name": "Dwi Tabella Ridiannita",
      "nim": "D0119033",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "ddwitabellaridiannita@student.uns.ac.id"
    },
    {
      "name": "Eka Yunia Azhary",
      "nim": "D0118030",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "@ekaazhary3@gmail.com"
    },
    {
      "name": "Eksa Zhenindo Hanif Amarullah",
      "nim": "D0119034",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "eksa_zhenindo19@student.uns.ac.id"
    },
    {
      "name": "Elsa Febriana",
      "nim": "D0119036",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "elsafebriana18@student.uns.ac.id"
    },
    {
      "name": "Elvina Ardelia Laksmi",
      "nim": "D0118031",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Elvinalaksmi999@student.uns.ac.id"
    },
    {
      "name": "Elya Nafisah",
      "nim": "D0119037",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "elyanafi95@student.uns.ac.id"
    },
    {
      "name": "Elzananda P",
      "nim": "D0119038",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "Elzananda07@student.uns.ac.id"
    },
    {
      "name": "Eric Fiera Setyawan",
      "nim": "D0118032",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "ericfiera123@student.uns.ac.id"
    },
    {
      "name": "Erika Aviola",
      "nim": "D0118033",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "aviolaerika@student.uns.ac.id"
    },
    {
      "name": "Eriska Nahda Tsabita",
      "nim": "D0119039",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "eriskatsabita@studen.uns.ac.id"
    },
    {
      "name": "Erviana Yuni P",
      "nim": "D0120023",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "Erviana30@student.uns.ac.id"
    },
    {
      "name": "Eunike Anindya Retno Sekar Rini",
      "nim": "D0120024",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "eunikeanindya22@student.uns.ac.id"
    },
    {
      "name": "Eva Nadya Pramesti",
      "nim": "D0119040",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "evanadyaap@student.uns.ac.id"
    },
    {
      "name": "Excel Lintang Dwi Cahyo",
      "nim": "D0119041",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "excellintang@student.uns.ac.id"
    },
    {
      "name": "Exnatia Maswa Aisa Tabasyasya",
      "nim": "D0119042",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "Exnatiamaswa@student.uns.ac.id"
    },
    {
      "name": "Fachmika Pradita Putri",
      "nim": "D0118035",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "fachmikaputri@student.uns.ac.id"
    },
    {
      "name": "Fadhil Muhammad Arif",
      "nim": "D0120025",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "mfadhilarif04@student.uns.ac.id"
    },
    {
      "name": "Fadilla Prihestiwi",
      "nim": "D0119043",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "prihestiwi02@student.uns.ac.id"
    },
    {
      "name": "Fania Defla Mareta Alexandria",
      "nim": "D0120026",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "faniadefla02@student.uns.ac.id"
    },
    {
      "name": "Farid Hasan",
      "nim": "D0118113",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "faridhasan@student.uns.ac.id"
    },
    {
      "name": "FAUZI IQBAL HIBATULLOH",
      "nim": "D0118038",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "fauziiqbal@student.uns.ac.id"
    },
    {
      "name": "Febrianti Novitasari",
      "nim": "D0118039",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "febriantinovitasari7@student.uns.ac.id"
    },
    {
      "name": "feby grace tobing",
      "nim": "D0119046",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "febby.grace24@student.uns.ac.id"
    },
    {
      "name": "Fefy Nur Khumaedah",
      "nim": "D0118040",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Fefynk2@student.uns.ac.id"
    },
    {
      "name": "Fipi Bela Rosanti",
      "nim": "D0119047",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "fipibela99@student.uns.ac.id"
    },
    {
      "name": "Firda Syakila Wardhani",
      "nim": "D0119048",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "firdasyakila09@student.uns.ac.id"
    },
    {
      "name": "Fitrach Lailia Balqis",
      "nim": "D0118041",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "fitrachlailia@student.uns.ac.id"
    },
    {
      "name": "Fitri Ana Rahmawati",
      "nim": "D0118042",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "greylotusflo@student.uns.ac.id"
    },
    {
      "name": "Galuh Ambarwati",
      "nim": "D0120028",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "galuhambarwati88@student.uns.ac.id"
    },
    {
      "name": "Gayatri Widya Indryani",
      "nim": "D0118044",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "gaya.22widya@student.uns.ac.id"
    },
    {
      "name": "Gita Cinta Ramadhani",
      "nim": "D0120029",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "gitacinta@student.uns.ac.id"
    },
    {
      "name": "Gustavo Bimofigo",
      "nim": "D0118045",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "gbimofigo@student.uns.ac.id"
    },
    {
      "name": "GUSTI AGUNG TRISTASYA AYUNINGTYAS",
      "nim": "D0119050",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "tasyayuningtyas@student.uns.ac.id"
    },
    {
      "name": "Hafsoh Labibatul Islam",
      "nim": "D0119051",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "hafsoh2002@student.uns.ac.id"
    },
    {
      "name": "Hana nima rosida",
      "nim": "D0119052",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "nima9hana@student.uns.ac.id"
    },
    {
      "name": "Hanifan Agung Wijaya",
      "nim": "D0119053",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "Hanifanagungwijaya@student.uns.ac.id"
    },
    {
      "name": "Hasna Maulida Zahra",
      "nim": "D0119054",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "haaasna27@student.uns.ac.id"
    },
    {
      "name": "Hida Essin Karomah",
      "nim": "D0118048",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "hidaessin@student.uns.ac.id"
    },
    {
      "name": "Hilda Maya Ramadani",
      "nim": "D0120031",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "hildamaya_hmr@student.uns.ac.id"
    },
    {
      "name": "Hilmy Yahya",
      "nim": "D0118049",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "hilmyyahya@student.uns.ac.id"
    },
    {
      "name": "Hosana Opalia Waluyati",
      "nim": "D0118050",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Hosana28o@student.uns.ac.id"
    },
    {
      "name": "Ihya Fadhil Muhammad",
      "nim": "D0118051",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "zaky.ans@student.uns.ac.id"
    },
    {
      "name": "Ika Ananda Meilina",
      "nim": "D0119055",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "ikameilina8@student.uns.ac.id"
    },
    {
      "name": "Ilham Rifqi Rizaldi",
      "nim": "D0118052",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "ilhamical@student.uns.ac.id"
    },
    {
      "name": "Imara Pramesti Normalita Andaru",
      "nim": "D0118053",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "imaraandaru@student.uns.ac.id"
    },
    {
      "name": "Imroatul Azizah",
      "nim": "D0119056",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "imroatulazizah1408@student.uns.ac.id"
    },
    {
      "name": "Ina Nur Janah Isnaini",
      "nim": "D0119057",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "inanurjanahisnaini168@student.uns.ac.id"
    },
    {
      "name": "Inesa Meliasheva",
      "nim": "D0118055",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "inesamelia1@student.uns.ac.id"
    },
    {
      "name": "INTAN KUSUMA DEWAYANI",
      "nim": "D0117057",
      "prodi": "Administrasi Negara",
      "angkatan": 2017,
      "email": "intankdewayani@student.uns.ac.id"
    },
    {
      "name": "Intanita Nurlaili Rosyada",
      "nim": "D0120032",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "intanita1310@student.uns.ac.id"
    },
    {
      "name": "Ismawiyah",
      "nim": "D0119058",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "ismawiyah22@student.uns.ac.id"
    },
    {
      "name": "Ismu Agung Alfarist",
      "nim": "D0119059",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "agungalfarist@student.uns.ac.id"
    },
    {
      "name": "Ivan Aditya",
      "nim": "D0120033",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "aytidanavi@student.uns.ac.id"
    },
    {
      "name": "Izma fatima",
      "nim": "D0119060",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "izmafatima17@student.uns.ac.id"
    },
    {
      "name": "Jabar Sugiharto",
      "nim": "D0119061",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "jabarsugiharto15@student.uns.ac.id"
    },
    {
      "name": "Javier endri",
      "nim": "D0118058",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Javierendri@student.uns.ac.id"
    },
    {
      "name": "Jayanti arvi setiani",
      "nim": "D0119062",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "jayantiarvi@student.uns.ac.id"
    },
    {
      "name": "Kaifa Nunsyizuha",
      "nim": "D0118059",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Kaifanunsyizuha1999@student.uns.ac.id"
    },
    {
      "name": "Kartika Nur Hidayati",
      "nim": "D0118060",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Kartikanha@student.uns.ac.id"
    },
    {
      "name": "Kevin Athiya Nur Pratama",
      "nim": "D0120035",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "athiyakevin@student.uns.ac.id"
    },
    {
      "name": "Kevin Farizka",
      "nim": "D0120036",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "farizkavin@student.uns.ac.id"
    },
    {
      "name": "Khansa Kamilia",
      "nim": "D0118061",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "khansa.kamilia01@student.uns.ac.id"
    },
    {
      "name": "Kiki Setiyaningsih",
      "nim": "D0118062",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "kikisetiyaningsih_18@student.uns.ac.id"
    },
    {
      "name": "Kirey Kawuri",
      "nim": "D0120037",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "kireykwr28@student.uns.ac.id"
    },
    {
      "name": "Krisna Avi Arlinta",
      "nim": "D0119063",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "aviarlinta31@atudent.uns.ac.id"
    },
    {
      "name": "Laura Octavia",
      "nim": "D0119064",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "lauraoctv1@student.uns.ac.id"
    },
    {
      "name": "Lisa Cafiyanti",
      "nim": "D0120039",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "lisacafiyanti09@student.uns.ac.id"
    },
    {
      "name": "Malida Salsabila Putri",
      "nim": "D0120041",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "malidasp@student.uns.ac.id"
    },
    {
      "name": "malik yuari",
      "nim": "D0119065",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "malikyuari@student.uns.ac.id"
    },
    {
      "name": "Mawar Asyfa Salsabilla",
      "nim": "D0119068",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "mawarsalsabilla@student.uns.ac.id"
    },
    {
      "name": "Mei Diana Murti Rahmasari",
      "nim": "D0118064",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "meidiana18@student.uns.ac.id"
    },
    {
      "name": "Melinia Marasuchi",
      "nim": "D0119069",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "meliniamarasuchi@student.uns.ac.id"
    },
    {
      "name": "Merry Dwi Cahyani",
      "nim": "D0118066",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "mrry.dc@student.uns.ac.id"
    },
    {
      "name": "Miftara Firdha",
      "nim": "D0118067",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "miftarafir@student.uns.ac.id"
    },
    {
      "name": "Misa'al Rizqulloh Al Qodir",
      "nim": "D0118068",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "misaalr13@student.uns.ac.id"
    },
    {
      "name": "Mohammed Haykal Jason Wicaksongko",
      "nim": "D0119071",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "haykaljason@student.uns.ac.id"
    },
    {
      "name": "Muflihah",
      "nim": "D0119072",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "muflihah@student.uns.ac.id"
    },
    {
      "name": "Muhamad Abdul Haqqi",
      "nim": "D0119073",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "mabdulhaqqi224@student.uns.ac.id"
    },
    {
      "name": "Muhamad Ilham Febrian",
      "nim": "D0119074",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "ilhamfebrian@student.uns.ac.id"
    },
    {
      "name": "Muhammad Atha Sulthan Zacky",
      "nim": "D0120044",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "athazacky@student.uns.ac.id"
    },
    {
      "name": "muhammad bagas",
      "nim": "D0119075",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "dewapujangga999@student.uns.ac.id"
    },
    {
      "name": "Muhammad Emeraldo Zidane",
      "nim": "D0119076",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "Muhammad.emeraldz@student.uns.ac.id"
    },
    {
      "name": "muhammad ilham faza",
      "nim": "D0119077",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "ilham4501@student.uns.ac.id"
    },
    {
      "name": "Muhammad Lutfi Ardhiansyah",
      "nim": "D0119078",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "lutfiardhiansyah69@student.uns.ac.id"
    },
    {
      "name": "Muhammad Nurfathurrohman",
      "nim": "D0118071",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "fathur_25rohman@student.uns.ac.id"
    },
    {
      "name": "Muhammad Rasyid Rahman",
      "nim": "D0120046",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "rasyidrahman2857@student.uns.ac.id"
    },
    {
      "name": "Muhammad Rifki Nur Fauzy",
      "nim": "D0120043",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "muhrifkinurfauzy@student.uns.ac.id"
    },
    {
      "name": "Muhammad Taqwanur Faiz",
      "nim": "D0118072",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "muhtaqfaiz@student.uns.ac.id"
    },
    {
      "name": "Muhammad Thoriq Setiawan",
      "nim": "D0120048",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "thoriqset18@student.uns.ac.id"
    },
    {
      "name": "Muthia Nafisa",
      "nim": "D0118073",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Muthia.nafisa15@student.uns.ac.id"
    },
    {
      "name": "Mutiara Azzahra",
      "nim": "D0119079",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "mutiarazzhra@student.uns.ac.id"
    },
    {
      "name": "Mutiara Kharisawati",
      "nim": "D0120050",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "mutiarakharisawati18@student.uns.ac.id"
    },
    {
      "name": "Nadita Pratiwi",
      "nim": "D0118074",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "pratiwinadita@student.uns.ac.id"
    },
    {
      "name": "Nahdhia Nurul Azizah",
      "nim": "D0120052",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "nahdhia_azizah29@student.uns.ac.id"
    },
    {
      "name": "Nanda Saskia Putri",
      "nim": "D0119080",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "nandasaskiaputri@student.uns.ac.id"
    },
    {
      "name": "Natalie Purnama",
      "nim": "D0120053",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "nataliepurnama@student.uns.ac.id"
    },
    {
      "name": "Nida Afifah Pertiwi",
      "nim": "D0119083",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "nidaafifah@student.uns.ac.id"
    },
    {
      "name": "Niken Mega Utami",
      "nim": "D0118075",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "nikenmegautami@student.uns.ac.id"
    },
    {
      "name": "Nindi Pratiwi",
      "nim": "D0119084",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "pranindi@student.uns.ac.id"
    },
    {
      "name": "Nindia Dila Oktavia",
      "nim": "D0120072",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "dilaoktvia831@student.uns.ac.id"
    },
    {
      "name": "Nindya Pramesthi Handayani",
      "nim": "D0120073",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "nindyahdyn23@student.uns.ac.id"
    },
    {
      "name": "Novi Danisa Halimah Azzahra",
      "nim": "D0120074",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "Novidha.14@student.uns.ac.id"
    },
    {
      "name": "Novi Pramudya Indriyani",
      "nim": "D0118077",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "novipramudya.i025@student.uns.ac.id"
    },
    {
      "name": "Nur 'Afif Ristiyanto Al-Fadl",
      "nim": "D0118080",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Afifalfadl7@student.uns.ac.id"
    },
    {
      "name": "NUR AINI KUSUMA PUTRI",
      "nim": "D0119086",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "nuraini02@student.uns.ac.id"
    },
    {
      "name": "Nur Haliza",
      "nim": "D0118078",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Nurhaliza040199@student.uns.ac.id"
    },
    {
      "name": "Okamaisya Sugiyanto",
      "nim": "D0118081",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Okamaisya@student.uns.ac.id"
    },
    {
      "name": "Oktaviruzan Azis Hastomi",
      "nim": "D0118083",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "azishastomi2210.gmail.com@student.uns.ac.id"
    },
    {
      "name": "Oktri Setianingsih",
      "nim": "D0119089",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "oktrisetia25@student.uns.ac.id"
    },
    {
      "name": "Oryza Puri Dyah Puspita",
      "nim": "D0119090",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "oryzap@student.uns.ac.id"
    },
    {
      "name": "Pingkan Mareda Premastani",
      "nim": "D0120075",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "pingkanmareda@student.uns.ac.id"
    },
    {
      "name": "Prama Aditya Graha",
      "nim": "D0120076",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "pramagraha09@student.uns.ac.id"
    },
    {
      "name": "Pramita Nur Azizah",
      "nim": "D0120054",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "pramitanur@student.uns.ac.id"
    },
    {
      "name": "Pramudya Nur Hayati",
      "nim": "D0119091",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "pramudyanurhayati@student.uns.ac.id"
    },
    {
      "name": "Puput Melati Putri",
      "nim": "D0120078",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "puputmelatiputri@student.uns.ac.id"
    },
    {
      "name": "Purwati Retno Wulandari",
      "nim": "D0120079",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "purwatiretnow@student.uns.ac.id"
    },
    {
      "name": "Putri Dwi Agustina",
      "nim": "D0120080",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "putridwiagustina@student.uns.ac.id"
    },
    {
      "name": "Putri Sundari",
      "nim": "D0119092",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "putrisundari@student.uns.ac.id"
    },
    {
      "name": "Raditya Anung Estiawan",
      "nim": "D0119093",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "radityanung19@student.uns.ac.id"
    },
    {
      "name": "Raina Zadyanti",
      "nim": "D0117081",
      "prodi": "Administrasi Negara",
      "angkatan": 2017,
      "email": "rainazadyanti@student.uns.ac.id"
    },
    {
      "name": "Rakryan Shelbidilla",
      "nim": "D0120082",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "Rakryan.10@student.uns.ac.id"
    },
    {
      "name": "Rani Hapsari",
      "nim": "D0120083",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "ranihapsari@student.uns.ac.id"
    },
    {
      "name": "Rani Yulianti",
      "nim": "D0118085",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Raniylnti28@student.uns.ac.id"
    },
    {
      "name": "Ratu Halima J Siagian",
      "nim": "D0118086",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "ratusiagian2000@student.uns.ac.id"
    },
    {
      "name": "Resta Oktafia Dwi Cahyani",
      "nim": "D0119094",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "resta_oktafia21@student.uns.ac.id"
    },
    {
      "name": "Retno Widyastutie",
      "nim": "D0119096",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "rwidyastutie@student.uns.ac.id"
    },
    {
      "name": "Retno Widyowati",
      "nim": "D0119097",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "retnowidyowati021@student.uns.ac.id"
    },
    {
      "name": "Reza Maulidya Permata",
      "nim": "D0119098",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "rezamaulidya@student.uns.ac.id"
    },
    {
      "name": "Riandini Yosandra Ira Nursanty",
      "nim": "D0118087",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "yosandrasanti@student.uns.ac.id"
    },
    {
      "name": "Ritha Inayah",
      "nim": "D0119099",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "rithainayah@student.uns.ac.id"
    },
    {
      "name": "Rizka Dyah Oktaviani",
      "nim": "D0120055",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "rizkadyah24@student.uns.ac.id"
    },
    {
      "name": "Rizka Kesuma Sasti",
      "nim": "D0118089",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "rizkakesuma4@student.uns.ac.id"
    },
    {
      "name": "Rizky Ardhian Nugraheni",
      "nim": "D0118090",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "rizkyardhiannugraheni@student.uns.ac.id"
    },
    {
      "name": "Rofi Aulia Azahra Putri",
      "nim": "D0120056",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "rofiaulia.18@student.uns.ac.id"
    },
    {
      "name": "Rolland Sukma Guritno",
      "nim": "D0119102",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "rollansukma@student.uns.ac.id"
    },
    {
      "name": "Ryanza Ridho Yaliarko",
      "nim": "D0119104",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "ryanzaridho@student.uns.ac.id"
    },
    {
      "name": "Salma Fauziah",
      "nim": "D0120057",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "salma.16@student.uns.ac.id"
    },
    {
      "name": "Salmashanda Wahyu Nyndo",
      "nim": "D0119106",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "shanda.salma@student.uns.ac.id"
    },
    {
      "name": "Salsabella Giovani Anggasta",
      "nim": "D0120058",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "salsabella.giovani@student.uns.ac.id"
    },
    {
      "name": "salsabila almas nadhifa",
      "nim": "D0117092",
      "prodi": "Administrasi Negara",
      "angkatan": 2017,
      "email": "salsabilalmas@student.uns.ac.id"
    },
    {
      "name": "Salsabila Inas Sausan",
      "nim": "D0119107",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "salsabilainas@student.uns.ac.id"
    },
    {
      "name": "Shafa Diaz Nurina Putri",
      "nim": "D0118093",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "shafa.dnp26@student.uns.ac.id"
    },
    {
      "name": "Shalahudin Akbari",
      "nim": "D0118094",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "akbar.suarez@student.uns.ac.id"
    },
    {
      "name": "Shefrin Nur Pawestri",
      "nim": "D0119110",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "shefrinurp@student.uns.ac.id"
    },
    {
      "name": "Sherina Widya Kusumaning Sutopo",
      "nim": "D0120060",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "sherinasutopo@student.uns.ac.id"
    },
    {
      "name": "Sherly Villsawati",
      "nim": "D0120061",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "sherlyvillsawati@student.uns.ac.id"
    },
    {
      "name": "Shinta Rosilawati",
      "nim": "D0119112",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "shintarslwt17@student.uns.ac.id"
    },
    {
      "name": "Shinta Tulus Rahayu",
      "nim": "D0119113",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "shintatulusr@student.uns.ac.id"
    },
    {
      "name": "Sinta Harlinda Sari",
      "nim": "D0120062",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "sintaoke66@student.uns.ac.id"
    },
    {
      "name": "Siti Robingatul Mubariyah",
      "nim": "D0118098",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "robingatulsiti.14@student.uns.ac.id"
    },
    {
      "name": "Sonia Agustin Nurpitasari",
      "nim": "D0118099",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "soniaagustin@student.uns.ac.id"
    },
    {
      "name": "Sonya Indah Lestari",
      "nim": "D0119114",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "snyalstr@student.uns.ac.id"
    },
    {
      "name": "Stendy Lanan Maulana",
      "nim": "D0119115",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "stendymaulana@student.uns.ac.id"
    },
    {
      "name": "Swaty Meilawati",
      "nim": "D0119116",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "Swatymeila0507@student.uns.ac.id"
    },
    {
      "name": "Syifa Amalia Ikmala",
      "nim": "D0118101",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "syifa143@student.uns.ac.id"
    },
    {
      "name": "Syifa Mufida Rahma",
      "nim": "D0120063",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "Syifa.mufida14@student.uns.ac.id"
    },
    {
      "name": "Talita Amanda Azarine",
      "nim": "D0120064",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "talitaamanda@student.uns.ac.id"
    },
    {
      "name": "Tania Qori Azizah",
      "nim": "D0118102",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Tania_23@student.uns.ac.id"
    },
    {
      "name": "Taufik Ardhiansyah",
      "nim": "D0118103",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "taufikardhiansyah28@student.uns.ac.id"
    },
    {
      "name": "Theresia Adinda Kusuma Astuti",
      "nim": "D0118104",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "thrsdinda@student.uns.ac.id"
    },
    {
      "name": "Tiberias Joy Lampung",
      "nim": "D0119117",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "tiberiasjoylampung@student.uns.ac.id"
    },
    {
      "name": "Tirta Pawitra Indraswari",
      "nim": "D0119118",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "titaapawitra@student.uns.ac.id"
    },
    {
      "name": "Triwidianto Ramdhan Putra",
      "nim": "D0119119",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "ramdhanputrar@student.uns.ac.id"
    },
    {
      "name": "Tsalis Ahmad Afif",
      "nim": "D0120065",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "tsalisahmadafif@student.uns.ac.id"
    },
    {
      "name": "UMMY ROFINGATUN KHASANAH",
      "nim": "D0118105",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "ummyrkha_11@student.uns.ac.id"
    },
    {
      "name": "Virginia Dwi Cahyani",
      "nim": "D0119121",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "virginiadwicahyani@student.uns.ac.id"
    },
    {
      "name": "Widya Eka Febriswari",
      "nim": "D0120067",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "widyaeka_04@student.uns.ac id"
    },
    {
      "name": "Widyadary Paramesti",
      "nim": "D0120068",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "widyadaryparamesti@student.uns.ac.id"
    },
    {
      "name": "Wisnu Galih Permana",
      "nim": "D0120069",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "wisnugalih50@student.uns.ac.id"
    },
    {
      "name": "Yanisa Vany Mahasiwi",
      "nim": "D0120070",
      "prodi": "Administrasi Negara",
      "angkatan": 2020,
      "email": "yanisavany@student.uns.ac.id"
    },
    {
      "name": "Yoga Putra Aditama",
      "nim": "D0117103",
      "prodi": "Administrasi Negara",
      "angkatan": 2017,
      "email": "Yoga_aditama33@student.uns.ac.id"
    },
    {
      "name": "Yohanes Andika Setia Budi",
      "nim": "D0118108",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "Yohanes.andika24@student.uns.ac.id"
    },
    {
      "name": "Yusuf Bakhtiar",
      "nim": "D0118110",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "ysfbakhtiar02@student.uns.ac.id"
    },
    {
      "name": "Zain Afdha Zulaechah",
      "nim": "D0119124",
      "prodi": "Administrasi Negara",
      "angkatan": 2019,
      "email": "Zainafdha123@student.uns.ac.id"
    },
    {
      "name": "Zsa Zsa Zamzami Hasri Ananda",
      "nim": "D0118111",
      "prodi": "Administrasi Negara",
      "angkatan": 2018,
      "email": "zsazsahasriananda299@student.uns.ac.id"
    },
    {
      "name": "Abisatya J",
      "nim": "D0418001",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "abisatyaj@student.uns.ac.id"
    },
    {
      "name": "Adelia Ratna Suraningsih",
      "nim": "D0420002",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "adeliaratnas@student.uns.ac.id"
    },
    {
      "name": "Adha M Hakim",
      "nim": "D0418002",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "adhahakim@student.uns.ac.id"
    },
    {
      "name": "Adiba Aliyya Rahma",
      "nim": "D0420003",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "adibaaliyya@student.uns.ac.id"
    },
    {
      "name": "Aditya Zakky",
      "nim": "D0420005",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "adityazede@student.uns.ac.id"
    },
    {
      "name": "afifah amalia farizka",
      "nim": "D0418005",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "faa.amalia@student.uns.ac.id"
    },
    {
      "name": "Afifah Fidina Rosy",
      "nim": "D0418006",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "Afrosyzeo@student.uns.ac.id"
    },
    {
      "name": "Agatha Diwanti Puteri Ekaristi",
      "nim": "D0420008",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "puteridiwanti@student.uns.ac.id"
    },
    {
      "name": "Ahmad Ainun Najib",
      "nim": "D0417004",
      "prodi": "Hubungan Internasional",
      "angkatan": 2017,
      "email": "ahmadainunnajib@student.uns.ac.id"
    },
    {
      "name": "Akhmad veriza Ardiansyah",
      "nim": "D0420069",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "akhmad_veriza@student.uns.ac.id"
    },
    {
      "name": "Aldo Syahputra",
      "nim": "D0418007",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "aldosyahputra72@student.uns.ac.id"
    },
    {
      "name": "Alifia Ayu Ramadhani Febian",
      "nim": "D0420011",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "alifiaayu@student.uns.ac.id"
    },
    {
      "name": "Anisa Nurul Fitria Sholihah",
      "nim": "D0420013",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "anisanurulanfs@student.uns.ac.id"
    },
    {
      "name": "Anissa Safana Nuha",
      "nim": "D0420014",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "anissasafana@student.uns.ac.id"
    },
    {
      "name": "Annisa Aulia Permatasari",
      "nim": "D0419007",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "annisaaulia215@student.uns.ac.id"
    },
    {
      "name": "Atika Hapsari",
      "nim": "D0419010",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "atikhapsari@student.uns.ac.id"
    },
    {
      "name": "Audrey Nethania Wibowo",
      "nim": "D0420017",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "audreynethania@student.uns.ac.id"
    },
    {
      "name": "Awalludin Djalu Achmad Zidane",
      "nim": "D0420018",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "jaluzidan02@student.uns.ac.id"
    },
    {
      "name": "Axel Adam Mahendra",
      "nim": "D0418015",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "Axelmahendra@student.uns.ac.id"
    },
    {
      "name": "Bonifasius Ananda Putra",
      "nim": "D0420019",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "bonifasiusputra22@student.uns.ac.ic"
    },
    {
      "name": "Caroline Putri",
      "nim": "D0420020",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "Carolineputrim21@student.uns.ac.id"
    },
    {
      "name": "Chantika Wuragil Budhi Melania",
      "nim": "D0418017",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "chantikawuragil@student.uns.ac.id"
    },
    {
      "name": "Christella Jessicha Theacornelia",
      "nim": "D0419011",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "christellajess_27@student.uns.ac.id"
    },
    {
      "name": "Cinditya Arum Sari",
      "nim": "D0419012",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "cindityaarum@student.uns.ac.id"
    },
    {
      "name": "Daniel Erwin Varianto",
      "nim": "D0418019",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "danielerwinvarianto65@student.uns.ac.id"
    },
    {
      "name": "Diah Ayu Puspitasari",
      "nim": "D0420023",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "dayupuspitasari22@student.uns.ac.id"
    },
    {
      "name": "Dian Chairun Nisa",
      "nim": "D0419017",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "dianchairun.n@student.uns.ac.id"
    },
    {
      "name": "Dian Wahyu Oktarina",
      "nim": "D0419018",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "dianoktarinaa23@student.uns.ac.id"
    },
    {
      "name": "Ebtania Prasti Melianingrum",
      "nim": "D0420024",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "ebtaniaprasti@student.uns.ac.id"
    },
    {
      "name": "Edo Artima Kasla",
      "nim": "D0420025",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "edoartimakasla@student.uns.ac.id"
    },
    {
      "name": "Eugenia Faradiva Amanda",
      "nim": "D0420026",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "eugeniafrdv08@student.uns.ac.id"
    },
    {
      "name": "Fannisa Himni Aiza Rosyada",
      "nim": "D0420027",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "fannisahimni.ar@student.uns.ac.id"
    },
    {
      "name": "Feby Heidiati",
      "nim": "D0420029",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "fby.heidi15@student.uns.ac.id"
    },
    {
      "name": "Gloria Esmeralda Jesus De Oliveira",
      "nim": "D0420078",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "gloriaoliveir34@student.uns.ac.id"
    },
    {
      "name": "Halizza Dhia Damarrosybi",
      "nim": "D0420070",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "halizzadhiaa@student.uns.ac.id"
    },
    {
      "name": "Hamas Nurhan R T",
      "nim": "D0418029",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "hamasnurhanrt@student.uns.ac.id"
    },
    {
      "name": "Husain Abdurrahman",
      "nim": "D0420032",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "crosslive900@student.uns.ac.id"
    },
    {
      "name": "idah galuh ayu s.",
      "nim": "d0419026",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "galuhayuy@student.uns.ac.id"
    },
    {
      "name": "Iqbal Arya Ramadhan",
      "nim": "D0420034",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "iqballarya@student.uns.ac.id"
    },
    {
      "name": "Ita Pamungkas",
      "nim": "D0420035",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "ita.pamungkas@student.uns.ac.id"
    },
    {
      "name": "Jericho Julius Prabowo",
      "nim": "D0420036",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "jerichojuliusp@student.uns.ac.id"
    },
    {
      "name": "João Pedro Martins",
      "nim": "D0420079",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "joao2020@student.uns.ac.id"
    },
    {
      "name": "Juana Clarentine Emmanuela Greevince De Lucas",
      "nim": "D0420037",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "juanaclarentineegdl@student.uns.ac.id"
    },
    {
      "name": "Kresna Damar Adji",
      "nim": "D0420038",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "Adji.bci@student.uns.ac.id"
    },
    {
      "name": "Larasati Dwina Kinanti",
      "nim": "D0419030",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "lrstknnt10@student.uns.ac.id"
    },
    {
      "name": "Lucio castanheira da Cruz dos santos",
      "nim": "D0420080",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "Lucio2020@student.uns.ac.id"
    },
    {
      "name": "Lutfia Nur Aini",
      "nim": "D0419032",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "lutfiana9010@student.uns.ac.id"
    },
    {
      "name": "M.Rizky Erfian",
      "nim": "D0419033",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "mr.erfian@student.uns.ac.id"
    },
    {
      "name": "Madda Asyafa Putra",
      "nim": "D0418035",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "madda.asyafa@student.uns.ac.id"
    },
    {
      "name": "mareda AFM",
      "nim": "D0419035",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "farraasmajiid@student.uns.ac.id"
    },
    {
      "name": "Muhammad Aldi Setyawan",
      "nim": "D0418038",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "muhammad.aldys@student.uns.ac.id"
    },
    {
      "name": "Muhammad Dzaky Putra Sani",
      "nim": "D0420040",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "mdzakyps@student.uns.ac.id"
    },
    {
      "name": "Muhammad Faris Pambudiluhur",
      "nim": "D0420041",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "farispambudi@student.uns.ac.id"
    },
    {
      "name": "Muhammad Nuha Zakiyy",
      "nim": "D0418040",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "nuhazaki05@student.uns.ac.id"
    },
    {
      "name": "Muhammad Rayhan Anandito",
      "nim": "D0420042",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "mranandito@student.uns.ac.id"
    },
    {
      "name": "Muhammad Rizky Fadhillah",
      "nim": "D0420043",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "rizkyfdhllh@student.uns.ac.id"
    },
    {
      "name": "Muhammad Zuhdiya Sukma",
      "nim": "D0420046",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "mzsukmaa@student.uns.ac.id"
    },
    {
      "name": "Muhandisa Tamaruni",
      "nim": "D0419038",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "muhandisatamaruni@student.uns.ac.id"
    },
    {
      "name": "Nathania Intan Pratiwi",
      "nim": "D0420047",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "nathaniaintan1@student.uns.ac.id"
    },
    {
      "name": "Naufal Fauzan Deva Laksana",
      "nim": "D0420048",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "fauzandeva@student.uns.ac.id"
    },
    {
      "name": "Nindia Kartika Ayusinta",
      "nim": "D0420071",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "nindiakartika@student.uns.ac.id"
    },
    {
      "name": "Noer Achmad Septian",
      "nim": "D0418043",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "Fidoseptian@student.uns.ac.id"
    },
    {
      "name": "Noverino Faiz Adi Muhammad",
      "nim": "D0420072",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "noverinomuhammad@student.uns.ac.id"
    },
    {
      "name": "Pandu Akbar Mustaqim",
      "nim": "D0419042",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "pandupna1@student.uns.ac.id"
    },
    {
      "name": "Paramesti Safa Ardiningrum",
      "nim": "D0420049",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "paramesti.safa@student.uns.ac.id"
    },
    {
      "name": "Permadani Fitriasari Purnomo",
      "nim": "D0420073",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "permadani.fitria@student.uns.ac.id"
    },
    {
      "name": "Petrus Chandrawasi",
      "nim": "D0420074",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "petrus.chandra@student.uns.ac.id"
    },
    {
      "name": "Pravda Dandun Jadmkiko",
      "nim": "D0418045",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "pravdajd@student.uns.ac.id"
    },
    {
      "name": "Pusparawi Praba Pratiwi",
      "nim": "D0419043",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "pusparawi@student.uns.ac.id"
    },
    {
      "name": "Rafli Zahran",
      "nim": "D0419046",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "raflizahran@student.uns.ac.id"
    },
    {
      "name": "Raja Kamilia Kamila Sihombing",
      "nim": "D0420077",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "kameliakamila@student.uns.ac.id"
    },
    {
      "name": "Regina Michelle Tansaya Pramono",
      "nim": "D0420075",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "Michelletansaya.392@student.uns.ac.id"
    },
    {
      "name": "Rekkaza Airimbang Adriadi",
      "nim": "D0420076",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "rekkaza@student.uns.ac.id"
    },
    {
      "name": "Rifqi Malia Anindhita",
      "nim": "D0419051",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "rifqimalia@student.uns.ac.id"
    },
    {
      "name": "Rio Abei Santoso",
      "nim": "D0418047",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "rioabsants@student.uns.ac.id"
    },
    {
      "name": "Risga Daffa Pradana",
      "nim": "D0419053",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "risgadaffap@student.uns.ac.id"
    },
    {
      "name": "Salma Amalina Nur S",
      "nim": "D0418049",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "salmasamhanaa@student.uns.ac.id"
    },
    {
      "name": "Salsabila Putri Chaerunnisa",
      "nim": "D0418052",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "salsabilapch48@student.uns.ac.id"
    },
    {
      "name": "Sanggam Napitupulu",
      "nim": "D0419008",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "maruli@student.uns.ac.id"
    },
    {
      "name": "Santi Noor Pratiwi",
      "nim": "D0419057",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "santinoorpratiwi@student.uns.ac.id"
    },
    {
      "name": "Sava Anisha Wahyudi",
      "nim": "D0419058",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "savaanisha_1606@student.uns.ac.id"
    },
    {
      "name": "Sherley Adalia",
      "nim": "D0419059",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "sherleyadalia@student.uns.ac.id"
    },
    {
      "name": "Sintya Dewi Rahma",
      "nim": "D0420056",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "sintyadewi@student.uns.ac.id"
    },
    {
      "name": "Siti Astiani Solihah",
      "nim": "D0420057",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "Sitiastiani25@student.uns.ac.id"
    },
    {
      "name": "Siti Fatimah",
      "nim": "D0420058",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "sisif8752@student.uns.ac.id"
    },
    {
      "name": "Syahla Fitri Ayuni",
      "nim": "D0420059",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "syahlafa@student.uns.ac.id"
    },
    {
      "name": "Syifa Kamila A",
      "nim": "D0419061",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "kamila@student.uns.ac.id"
    },
    {
      "name": "Tesalonika Ajeng Joanida",
      "nim": "D0419062",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "tesalonikajeng@student.uns.ac.id"
    },
    {
      "name": "Togu marisi",
      "nim": "D0420062",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "togu.marisi.pardede@student.uns.ac.id"
    },
    {
      "name": "Tsalsa Rosemalinda Wahyu",
      "nim": "D0419065",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "trosemalinda@student.uns.ac.id"
    },
    {
      "name": "Widi Astuti",
      "nim": "D0420063",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "widiast90@student.uns.ac.id"
    },
    {
      "name": "Winona Safira",
      "nim": "D0420064",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "Nonnaasf_13@student.uns.ac.id"
    },
    {
      "name": "Yehezkiel Pramaditya Alviano",
      "nim": "D0418058",
      "prodi": "Hubungan Internasional",
      "angkatan": 2018,
      "email": "yehezkiel.pramaditya12@student.uns.ac.id"
    },
    {
      "name": "Yemima Bintoro",
      "nim": "D0420065",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "Yemimabintoro@student.uns.ac.id"
    },
    {
      "name": "Yosia Paskah Memah",
      "nim": "D0420066",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "yosiamemah@student.uns.ac.id"
    },
    {
      "name": "Yunita Citra Ersani",
      "nim": "D0420067",
      "prodi": "Hubungan Internasional",
      "angkatan": 2020,
      "email": "yunitacitra@student.uns.ac.id"
    },
    {
      "name": "Yustitika Amalia",
      "nim": "D0419068",
      "prodi": "Hubungan Internasional",
      "angkatan": 2019,
      "email": "yustitikaa27@student.uns.ac.id"
    },
    {
      "name": "Abdurrobby Rahmadi",
      "nim": "D0220002",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "abdurrobbyrahmadi@student.uns.ac.id"
    },
    {
      "name": "Abraham Gamma Pratama",
      "nim": "D0218001",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "abrahampratama916@student.uns.ac.id"
    },
    {
      "name": "Abyan Ajrurrafi Syauqi",
      "nim": "D0217001",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "abyansyauqi@student.uns.ac.id"
    },
    {
      "name": "Acchedya Ashria Rahman",
      "nim": "D0218002",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "dya1140@student.uns.ac.id"
    },
    {
      "name": "Aflakha Tazakka",
      "nim": "D0220004",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "Aflakha16@student.uns.ac.id"
    },
    {
      "name": "Afradyta Oktaviani",
      "nim": "D0219001",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "oktavianiafradyta@student.uns.ac.id"
    },
    {
      "name": "aghnia brenda n",
      "nim": "D0220005",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "aghniabrenda8@student.uns.ac.id"
    },
    {
      "name": "Agung Khairul Shabirin",
      "nim": "D0220006",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "agungkhairulshabirin@student.uns.ac.id"
    },
    {
      "name": "Agustin Nur Hanifah",
      "nim": "D0220097",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "agustinnurhanifah@student.uns.ac.id"
    },
    {
      "name": "Ahmad Yumnan",
      "nim": "D0219002",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "ahmyumnan19@student.uns.ac.id"
    },
    {
      "name": "Aisyah Fithrotulhaq",
      "nim": "D219003",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "aisyahfith3@student.uns.ac.id"
    },
    {
      "name": "Ajeng Kartika Saraswati",
      "nim": "D0219004",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "krtksaraswati@student.uns.ac.id"
    },
    {
      "name": "Akbar Kurniawan Dorojatu",
      "nim": "D0218005",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "akbardorojatun@student.uns.ac.id"
    },
    {
      "name": "Alcino Lelo Bele Gouveia",
      "nim": "D0220109",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "alcino123@student.uns.ac.id"
    },
    {
      "name": "Aldi Novianto",
      "nim": "D0220008",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "noviantoaldi25@student.uns.ac.id"
    },
    {
      "name": "Alessandra Maria Daniartha",
      "nim": "D0219005",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "www.alessandra@student.uns.ac.id"
    },
    {
      "name": "Alfina Raditia Aulia",
      "nim": "D0219006",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "alfinatia@student.uns.ac.id"
    },
    {
      "name": "Alhamdi Eland Famogia",
      "nim": "D0219007",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "alhamdief@student.uns.ac.id"
    },
    {
      "name": "Almira Ayu Desriana",
      "nim": "D0219008",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "almiradesriana@student.uns.ac.id"
    },
    {
      "name": "Alya Rizca Aisya",
      "nim": "D0220011",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "alya.rizca23@student.uns.ac.id"
    },
    {
      "name": "Amelia Bella Benita",
      "nim": "D0219010",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "abellabenita05@student.uns.ac.id"
    },
    {
      "name": "Andi Prasetyo",
      "nim": "D0220014",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "prasetyoandi127@student.uns.ac.id"
    },
    {
      "name": "Andita Nur Pratiwi",
      "nim": "D0219011",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "anditanur_123@student.uns.ac.id"
    },
    {
      "name": "Anggit Wedya Rini",
      "nim": "D0220015",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "anggitwedya@student.uns.ac.id"
    },
    {
      "name": "Anjani Elmawati",
      "nim": "D0220017",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "anjanielma02@student.uns.ac.id"
    },
    {
      "name": "Annas Rafli Haya",
      "nim": "D0218009",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "annashaya@student.uns.ac.id"
    },
    {
      "name": "Annisa Bintang Mutiara Jasmine Sidoyo",
      "nim": "D0218010",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "annisabintg@student.uns.ac.id"
    },
    {
      "name": "Annisa Wulandari",
      "nim": "D0220018",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "riannisaw@student.uns.ac.id"
    },
    {
      "name": "Aqila Egarinaning Wardani",
      "nim": "D0218013",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "aqilaeg@student.uns.ac.id"
    },
    {
      "name": "Aqilah Zulfa",
      "nim": "D0220019",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "Aqilahzulfa09@student.uns.ac.id"
    },
    {
      "name": "Araditho vatdin M. N",
      "nim": "D0219012",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "Araditoso35@student.uns.ac.id"
    },
    {
      "name": "Arina Zulfa Ul Haq",
      "nim": "D0219013",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "zulfaarina26@student.uns.ac.id"
    },
    {
      "name": "aristya fadilla damayanti",
      "nim": "d0219014",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "aristyafadillad@student.uns.ac.id"
    },
    {
      "name": "Asharina Zahra' Maulidina",
      "nim": "D0219015",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "asharinazahra@student.uns.ac.id"
    },
    {
      "name": "Atassya p d",
      "nim": "D0219016",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "atassyaputri@student.uns.ac.id"
    },
    {
      "name": "Aulia Maulida Rachman",
      "nim": "D0219017",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "auliamaulidar@student.uns.ac.id"
    },
    {
      "name": "Ayu Permata Sari",
      "nim": "D0220021",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2028,
      "email": "ayusari@student.uns.ac.id"
    },
    {
      "name": "Azizah Diah Wulandari",
      "nim": "D0218015",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "azizahdiahw@student.uns.ac.id"
    },
    {
      "name": "Badaruddin Akbar Santoso",
      "nim": "D0219018",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "badaruddinakbar123@student.uns.ac.id"
    },
    {
      "name": "Bagas Sasongko Aji",
      "nim": "D0220023",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "bagasaji38036@student.uns.ac.id"
    },
    {
      "name": "Berlinrafa Nabila Kisworo",
      "nim": "D0219020",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "berlinrafank1@student.uns.ac.id"
    },
    {
      "name": "Bernardus Gian Pratama",
      "nim": "D0217024",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "gianteplok@student.uns.ac.id"
    },
    {
      "name": "Bintang Surya Laksana",
      "nim": "D0218019",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "bsl.bintanglangit@student.uns.ac.id"
    },
    {
      "name": "Brilyan Duta Nuswantoro",
      "nim": "D0217025",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "brilyanduta@student.uns.ac.id"
    },
    {
      "name": "Burhan Widyatmaka",
      "nim": "D0219021",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "burhanwidyatmaka01@student.uns.ac.id"
    },
    {
      "name": "Cornelia Dinda Puspita Dewi",
      "nim": "D0220027",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "corneliadinda@student.uns.ac.id"
    },
    {
      "name": "D. Fany Apbariantika",
      "nim": "D0219023",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "fanytika@student.uns.ac.id"
    },
    {
      "name": "Davieq Fasholla Hakam",
      "nim": "D0220028",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "dfashollah26@student.uns.ac.id"
    },
    {
      "name": "Deamita Febriyani",
      "nim": "D0220029",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "deamitafeb262@student.uns.ac.id"
    },
    {
      "name": "Delva Anggit Kurnia Hanif",
      "nim": "D0219025",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "delvaanggit64@student.uns.ac.id"
    },
    {
      "name": "Denisa Shafadila",
      "nim": "D0218024",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "denisa.shafa18@student.uns.ac.id"
    },
    {
      "name": "Deradzra Syifaa Adrieva",
      "nim": "D0219026",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "deradzrasa@student.uns.ac.id"
    },
    {
      "name": "Desas Noel Pitaloka",
      "nim": "D0220031",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "desasnp@student.uns.ac.id"
    },
    {
      "name": "Devina Ayu Febiana",
      "nim": "D0220032",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "dvnafebiana@student.uns.ac.id"
    },
    {
      "name": "Diaz Arvira Suha",
      "nim": "D0219028",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "arviradiaz@student.uns.ac.id"
    },
    {
      "name": "Dicky Irawan Taufiq",
      "nim": "D0218026",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "dicky_irawan27@student.uns.ac.id"
    },
    {
      "name": "Dila Septi Asrining Kanastren",
      "nim": "D0219029",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "dilasepti@student.uns.ac.id"
    },
    {
      "name": "Dimas Dwicahyono Putro",
      "nim": "D0220033",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "dimasdcp89@student.uns.ac.id"
    },
    {
      "name": "Eldiana Irine Candra Oktariani",
      "nim": "D0219031",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "eldianaairine12@student.uns.ac.id"
    },
    {
      "name": "Eleonora Ushuaia",
      "nim": "D0220035",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "eleonora10@student.uns.ac.id"
    },
    {
      "name": "Erliska Yuniar Purbayani",
      "nim": "D0219032",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "erliskayup86@uns.student.ac.id"
    },
    {
      "name": "Eugenio Lay",
      "nim": "D0219103",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "layeugenio777@student.uns.ac.id"
    },
    {
      "name": "Fadia Haris Nur Salsabila",
      "nim": "D0218028",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "fadiaharis@student.uns.ac.id"
    },
    {
      "name": "Fadillah Nur Fauzi",
      "nim": "D0218029",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "Fn_fauzi069@student.uns.ac.id"
    },
    {
      "name": "Fairuz Rahmawati",
      "nim": "D0220036",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "fairuzrahmawati@student.uns.ac.id"
    },
    {
      "name": "Fajrul Affi Zaidan Al Kannur",
      "nim": "D0217035",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "fajrulaffi@student.uns.ac.id"
    },
    {
      "name": "Faros Khoirudin Prayoga",
      "nim": "D0220037",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "faroskhoirudin@student.uns.ac.id"
    },
    {
      "name": "Muhammad Feraldi Hifzurahman",
      "nim": "D0217058",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "feraaaldi@student.uns.ac.id"
    },
    {
      "name": "Ferdian Angka Saputra",
      "nim": "D0220039",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "ferdianangka19@student.uns.ac.id"
    },
    {
      "name": "Firnando Akbar Zakaria",
      "nim": "D0219035",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "firnando@student.uns.ac.id"
    },
    {
      "name": "Fitria Putri Alifa",
      "nim": "D0219036",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "Fitriaputri@student.uns.ac.id"
    },
    {
      "name": "Fransisca Septiani",
      "nim": "D0218031",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "fransiscaseptiani@student.uns.ac.id"
    },
    {
      "name": "Gede Arga Adrian",
      "nim": "D0218033",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "Gedearga2201@student.uns.ac.id"
    },
    {
      "name": "Gendis Fahira Atsiilah",
      "nim": "D0220040",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "gendisfahiraa@student.uns.ac.id"
    },
    {
      "name": "GIbran Aulia Muhammad",
      "nim": "D0219037",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "gibrananana@student.uns.ac.id"
    },
    {
      "name": "Gita Kurniasih",
      "nim": "D0218034",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "gitakrnh@student.uns.ac.id"
    },
    {
      "name": "Godeliva Nuli Andira",
      "nim": "D0220041",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "godelivanandira@student.uns.ac.id"
    },
    {
      "name": "Graceshanda Findya Putri",
      "nim": "D0219038",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "graceshandafp@student.uns.ac.id"
    },
    {
      "name": "Hammam Arya Pradhana",
      "nim": "D0219039",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "hammamaryapradhana@student.uns.ac.id"
    },
    {
      "name": "Hanum Aysia Minangsih",
      "nim": "D0218036",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "hanumaysiam@student.uns.ac.id"
    },
    {
      "name": "Humani Enggar Nugrahani",
      "nim": "D0219040",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "humaninugrahani0@student.uns.ac.id"
    },
    {
      "name": "Ilman Abdurahman",
      "nim": "D0219041",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "ilman.abdu@student.uns.ac.id"
    },
    {
      "name": "Indah Kurnianingrum",
      "nim": "D0218038",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "indahkurnia4799@student.uns.ac.id"
    },
    {
      "name": "Ira Rahayu",
      "nim": "D0220044",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "irarahayu@student.uns.ac.id"
    },
    {
      "name": "Irsalina Qurrota Ghossani",
      "nim": "D0220045",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "irsalinaqurrota25@student.uns.ac.id"
    },
    {
      "name": "Isa Ias Soares",
      "nim": "D0219043",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "isaiassrs@student.uns.ac.id"
    },
    {
      "name": "Isyfina Tazki Hamida",
      "nim": "D0220046",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "isyfinatazki@student.uns.ac.id"
    },
    {
      "name": "Izzam Lare Traviata",
      "nim": "D0219044",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "izzamtraviata@student.uns.ac.id"
    },
    {
      "name": "Izzul Hudia Alfaza",
      "nim": "D0219045",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "raditech557@student.uns.ac.id"
    },
    {
      "name": "Jagat Afghani Gangsar Sutrisna",
      "nim": "D0220047",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "afghanijagat@student.uns.ac.id"
    },
    {
      "name": "Janeth Christy Effendi",
      "nim": "D0219046",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "janethchristy09@student.uns.ac.id"
    },
    {
      "name": "Jasmine Febria Nur Hardianti",
      "nim": "D0218039",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "jasminefebria21@student.uns.ac.id"
    },
    {
      "name": "Kalimaya Octa Kumaraningtyas",
      "nim": "D0218041",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "kalimayaocta@student.uns.ac.id"
    },
    {
      "name": "Kanyaka Anindita",
      "nim": "D0219048",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "kanyakaaaaa@student.uns.ac.id"
    },
    {
      "name": "Kartika Ratna Ningsih",
      "nim": "D0219049",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "Kar.tika@student.uns.ac.id"
    },
    {
      "name": "Katrin Yemima Siahaan",
      "nim": "D0220049",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "Katrin02s@student.uns.ac.id"
    },
    {
      "name": "Kevin Reynaldi Priandika",
      "nim": "D0220050",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "kevinpriandika@student.uns.ac.id"
    },
    {
      "name": "Khadija Dheamita Ergianto",
      "nim": "D0219051",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "ergianto11@student.uns.ac.id"
    },
    {
      "name": "Kresnani Ayu Wardani",
      "nim": "D0220051",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "kresnani_2502@student.uns.ac.id"
    },
    {
      "name": "Kurniawan Hendi Prasetyo",
      "nim": "D0218044",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "Kurniawanhendi2016@student.uns.ac.id"
    },
    {
      "name": "Laila Destiana Ayu Santoso",
      "nim": "D0219052",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "laila01santoso@student.uns.ac.id"
    },
    {
      "name": "Lala Dila Pradini",
      "nim": "D0218045",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "lala_dp129@student.uns.ac.id"
    },
    {
      "name": "Laurensia Puteri Intani",
      "nim": "D0220052",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "laurenintani@student.uns.ac.id"
    },
    {
      "name": "Lucia Daniella Siagian",
      "nim": "D0218046",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "Luciadaniellas@student.uns.ac.id"
    },
    {
      "name": "Lucia Triyananda Hayuningsih",
      "nim": "D0218047",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "luciatriyananda@student.uns.ac.id"
    },
    {
      "name": "Lukas Luhur Pambudi",
      "nim": "D0217051",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "kaluspambudi@student.uns.ac.id"
    },
    {
      "name": "Muhamad Ainul Falah Aditya",
      "nim": "D0219060",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "ainulfalah@student.uns.ac.id"
    },
    {
      "name": "Maharani Devitasari",
      "nim": "D0219053",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "maharanidevita@student.uns.ac.id"
    },
    {
      "name": "Margareth Vidya Paramitha",
      "nim": "D0219055",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "vidyamargareth@student.uns.ac.id"
    },
    {
      "name": "Maulana Wildan Ibrahim",
      "nim": "D0219056",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "wildanibrahim28@student.uns.ac.id"
    },
    {
      "name": "Maulidina Zahra Nabila",
      "nim": "D0219057",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "zahranabila26@student.uns.ac.id"
    },
    {
      "name": "Medianasari Ferdianyta",
      "nim": "D0220054",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "mediana1@student.uns.ac.id"
    },
    {
      "name": "Meyra Suci Ashifa",
      "nim": "D0220055",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "meyraashifa.10@student.uns.ac.id"
    },
    {
      "name": "Mita Wahyuningsih",
      "nim": "D0220057",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "Mitawahyuningsih@student.uns.ac.id"
    },
    {
      "name": "Mitha Sinayang",
      "nim": "D0218054",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "mithasinayang@student.uns.ac.id"
    },
    {
      "name": "Mohamad Afwan Ghoffar Ramadani",
      "nim": "D0219059",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "afwanmohamad38@student.uns.ac.id"
    },
    {
      "name": "Muh Amirul Shidqi",
      "nim": "D0219062",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "amirulsrl87@student.uns.ac.id"
    },
    {
      "name": "Muhammad Alfhian Nurhakim",
      "nim": "D0219061",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "alfhian@student.uns.ac.id"
    },
    {
      "name": "Muhammad Ariq Muzakki",
      "nim": "D0220059",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "ariqmuzakki@student.uns.ac.id"
    },
    {
      "name": "Muhammad Galang Saputra",
      "nim": "D0220061",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "mgalangs08@student.uns.ac.id"
    },
    {
      "name": "Muhammad Imam Hatami",
      "nim": "D0218059",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "muhatamimam99@student.uns.ac.id"
    },
    {
      "name": "Muhammad Imam Prasojo",
      "nim": "D0219064",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "imamprasojo@student.uns.ac.id"
    },
    {
      "name": "Muhammad Qais Al Qurni",
      "nim": "D0220062",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "qaismuhammad0212@student.uns.ac.id"
    },
    {
      "name": "Muhammad Rais Alfaridzi",
      "nim": "D0218060",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "mrais393@student.uns.ac.id"
    },
    {
      "name": "Muhammad Zharfan Rafif",
      "nim": "D0220065",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "mzharfanraf@student.uns.ac.id"
    },
    {
      "name": "Muthia Alya Rahmawati",
      "nim": "D0220066",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "muthiaalyar19@student.uns.ac.id"
    },
    {
      "name": "Mutiara Tsani Rosyida",
      "nim": "D0217059",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "mutiaratsanir@student.uns.ac.id"
    },
    {
      "name": "Nabilla Alfa Aulia",
      "nim": "D0220067",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "Nabillaalfa@student.uns.ac.id"
    },
    {
      "name": "Nabilla Audina",
      "nim": "D0219066",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "audinabilla@student.uns.ac.id"
    },
    {
      "name": "Nabilla Kusnia Hayati",
      "nim": "D0220068",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "khusnianabila@student.uns.ac.id"
    },
    {
      "name": "Nabilla Mutiara Hafidza",
      "nim": "D0220069",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "nabillamutiara@student.uns.ac.id"
    },
    {
      "name": "Nada Nu'ma Azkiya",
      "nim": "D0219067",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "nadaazkiya.1@student.uns.ac.id"
    },
    {
      "name": "Nadia Afifah Wardani",
      "nim": "D0220070",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "nadiaafifah29@student.uns.ac.id"
    },
    {
      "name": "nadine shafa nabila",
      "nim": "D0220071",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "nadinenabila@student.uns.ac.id"
    },
    {
      "name": "Nafat Affiat",
      "nim": "D0218062",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "affiatn@student.uns.ac.id"
    },
    {
      "name": "Naila Elief Avinda",
      "nim": "D0219069",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "nailaavinda25@student.uns.ac.id"
    },
    {
      "name": "Najwa Lailan Thawila Mayuza",
      "nim": "D0220072",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "najwalailan@student.uns.ac.id"
    },
    {
      "name": "Naufal Dzakiyul Afkar Putra",
      "nim": "D0219070",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "Naufalputra00@student.uns.ac.id"
    },
    {
      "name": "Neeva Najma Shafira",
      "nim": "D0220073",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "neevanajma@student.uns.ac.id"
    },
    {
      "name": "Niken Ayu Agustina",
      "nim": "D0219073",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "nikenaa8899@student.uns.ac.id"
    },
    {
      "name": "Novema Kumalasari",
      "nim": "D0220075",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "novema18@student.uns.ac.id"
    },
    {
      "name": "Nur Hasna Hamidah",
      "nim": "D0219074",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "nurrhasnaa@student.uns.ac.id"
    },
    {
      "name": "Nurhaliza Putri",
      "nim": "D0220099",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "nurhalizaputri@student.uns.ac.id"
    },
    {
      "name": "Nurul Alfi H.",
      "nim": "D0218065",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "alfi.hn@student.uns.ac.id"
    },
    {
      "name": "nurul izzah karimah",
      "nim": "D0219075",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "nurulizzahkrmh@student.uns.ac.id"
    },
    {
      "name": "Paskalis Damar Adileksono",
      "nim": "D0220101",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "pdamara@student.uns.ac.id"
    },
    {
      "name": "Prasetya Adi Pamungkas",
      "nim": "D0219077",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "prasetyaadip28@student.uns.ac.id"
    },
    {
      "name": "Putri Hapsari K.",
      "nim": "D0219078",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "putrihapsari@student.uns.ac.id"
    },
    {
      "name": "Qothrun Nada Kamilia",
      "nim": "D0218068",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "nadzulv@student.uns.ac.id"
    },
    {
      "name": "Raden Roro Diandri Rahmantya Putri",
      "nim": "D0220102",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "diandriputrii@student.uns.ac.id"
    },
    {
      "name": "Rahajeng Kartika Wungu",
      "nim": "D0219079",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "rahajeng33@student.uns.ac.id"
    },
    {
      "name": "Rahma Aurellia",
      "nim": "D0218069",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "rarellaurellia@student.uns.ac.id"
    },
    {
      "name": "Raihan Musthafa Armayadi",
      "nim": "D0220103",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "raihanmusthafaa@student.uns.ac.id"
    },
    {
      "name": "Rana Marsa Salimah",
      "nim": "D0220104",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "ranamarsa@student.uns.ac.id"
    },
    {
      "name": "Rasyiq Muhammad Hanif",
      "nim": "D0220105",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "rasyiqmuhammadh252@student.uns.ac.id"
    },
    {
      "name": "Raudlotul Jannah",
      "nim": "D0217073",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "Jannahrau1@student.uns.ac.id"
    },
    {
      "name": "Renata Listya",
      "nim": "D0219081",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "renatalistya_32@student.uns.ac.id"
    },
    {
      "name": "Ribka Natasya",
      "nim": "D0219083",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "ribkanatasya@student.uns.ac.id"
    },
    {
      "name": "Riffa rifqiyah",
      "nim": "D0218070",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "riffahwang@student.uns.ac.id"
    },
    {
      "name": "Riga Widyanita",
      "nim": "D0218071",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "rigawidyanitaa@student.uns.ac.id"
    },
    {
      "name": "Risma Ramadani",
      "nim": "D0219084",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "risma07@student.uns.ac.id"
    },
    {
      "name": "Rista Ambarwati",
      "nim": "D0220077",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "ristaambarwati@student.uns.ac.id"
    },
    {
      "name": "rizky anendya wicaksana",
      "nim": "d0219085",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "rizkyanendya@student.uns.ac.id"
    },
    {
      "name": "Rofifah Hasna' Firdausi",
      "nim": "D0219086",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "rofifah.hasna28@student.uns.ac.id"
    },
    {
      "name": "Sabila Soraya Dewi",
      "nim": "D0220078",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "sabilasorayadewi75@student.uns.ac.id"
    },
    {
      "name": "Safa Savira Yuandhita",
      "nim": "D0220079",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "safasaviray@student.uns.ac.id"
    },
    {
      "name": "Salma Prasantika Amada",
      "nim": "D0219088",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "amadasalma04@student.uns.ac.id"
    },
    {
      "name": "Salsa Khoirunisa",
      "nim": "D0219089",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "salsakhoirunisa12@student.uns.ac.id"
    },
    {
      "name": "Salsabila Shafa Aga Syaebani",
      "nim": "D0218076",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "salsabilashfa07@student.uns.ac.id"
    },
    {
      "name": "Salsabilla Gifta S",
      "nim": "D0219090",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "gifta_d0219090@student.uns.ac.id"
    },
    {
      "name": "Sandra Kartika Hapsari",
      "nim": "D0220081",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "sandrakartikahp@student.uns.ac.id"
    },
    {
      "name": "satrio adhi nagoro",
      "nim": "D0219091",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "satrioan@student.uns.ac.id"
    },
    {
      "name": "Sekar Fathin Gazhani",
      "nim": "D0219092",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "sekarfathinn@student.uns.ac.id"
    },
    {
      "name": "Selena Dian Kusumastuti",
      "nim": "D0220086",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "selenadian12@student.uns.ac.id"
    },
    {
      "name": "Sesilia Evelyn Cita Nathania",
      "nim": "D0219093",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "sesiliaevelyn@student.uns.ac.id"
    },
    {
      "name": "Shabrina Maulida S",
      "nim": "D0218080",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "shabrinamaulidas@stundent.uns.ac.id"
    },
    {
      "name": "Shafa Kamila",
      "nim": "D0219094",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "kamilashafa01@student.uns.ac.id"
    },
    {
      "name": "Sheila Agathea Nataline Setyawan",
      "nim": "D0220087",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "Sheilagathea@student.uns.ac.id"
    },
    {
      "name": "Shofi Nurul Wafa",
      "nim": "D0218081",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "Shofi_23wafa@student.uns.ac.id"
    },
    {
      "name": "Stella Maris Mbangga Radja",
      "nim": "D0218083",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "stellamaris1312@student.uns.ac.id"
    },
    {
      "name": "Stephanie Theora Agatha",
      "nim": "D0217086",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "stephanieagatha@student.uns.ac.id"
    },
    {
      "name": "Surya Ageng Priambudi",
      "nim": "D0220089",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "suryaagengp.16@student.uns.ac.id"
    },
    {
      "name": "Susi Wulandari",
      "nim": "D0217088",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "susi.wulandari13@student.uns.ac.id"
    },
    {
      "name": "syafa'atun rizky amalia",
      "nim": "D0219095",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "syafamaliaa@student.uns.ac.id"
    },
    {
      "name": "Syahrul Romadhon",
      "nim": "D0219096",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "boygrasak@student.ac.id"
    },
    {
      "name": "Syifa Albalqis Danayomi",
      "nim": "D0220091",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "syifa.albalqis@student.uns.ac.id"
    },
    {
      "name": "Tania Zahra Wahyu Salsabila",
      "nim": "D0220092",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "taniazahra02@student.uns.ac.id"
    },
    {
      "name": "Tennesia Davis Berliana",
      "nim": "D0220093",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "tennesia17@student.uns.ac.id"
    },
    {
      "name": "titan samudra",
      "nim": "d0219098",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "titan.samudra72@student.uns.ac.id"
    },
    {
      "name": "Ulifah",
      "nim": "D0217094",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "ulifah@student.uns.ac.id"
    },
    {
      "name": "Valen Fitra Narendra",
      "nim": "D0219099",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "valennarendra@student.uns.ac.id"
    },
    {
      "name": "Valentinus Rekho Ananda Wijaya",
      "nim": "D0217096",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "vwijaya98@student.uns.ac.id"
    },
    {
      "name": "Vania Madina R",
      "nim": "D0217097",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2017,
      "email": "vaniamadina01@student.uns.ac.id"
    },
    {
      "name": "Veri Dwi Saputra",
      "nim": "D0219100",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "veridwi@student.uns.ac.id"
    },
    {
      "name": "vina hermawati",
      "nim": "d0219101",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "vinahermawati31@student.uns.ac id"
    },
    {
      "name": "Waskito Krhisna Aji",
      "nim": "D0218088",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "waskito2406@student.uns.ac.id"
    },
    {
      "name": "Wening Palupi Ningtyas Putri",
      "nim": "D0220094",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "weningpnp28@student.uns.ac.id"
    },
    {
      "name": "Yanuka Martha Buana",
      "nim": "D0218089",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "yanukamartha@student.uns.ac.id"
    },
    {
      "name": "Yasmin Muna",
      "nim": "D0220095",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "yasminmunaa@student.uns.ac.id"
    },
    {
      "name": "Zahra Ivena Maurilla Devi",
      "nim": "D0220096",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2020,
      "email": "zahra.ivn@student.uns.ac.id"
    },
    {
      "name": "Zahrana Wijdan Kamila",
      "nim": "D0219102",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2019,
      "email": "zahranawijdan@student.uns.ac.id"
    },
    {
      "name": "Zhafira Pinasthika",
      "nim": "D0218090",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "zhaf_pinasthika99@students.uns.ac.id"
    },
    {
      "name": "Zulfatin Naila",
      "nim": "D0218091",
      "prodi": "Ilmu Komunikasi",
      "angkatan": 2018,
      "email": "zulfatin99@student.uns.ac.id"
    },
  ];

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.email = _participant.email;
    participant.session.id = "60216a8fe5ad344951df0c04";
    participant.session.number = 1;
    participant.session.min = new Date("2021-02-19T07:00:00.000Z");
    participant.session.max = new Date("2021-02-19T18:00:00.000Z");

    // Save and validate
    participant.save(function (err) {
      if (err) return res.status(500).json(err);

      Session.findById("60216a8fe5ad344951df0c04", function (err, session) {
        if (err) return res.status(500).json(err);
        session.total_participant++;
        Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
          (session) => {
            if (session) {
            } else {
            }
          }
        );
      });
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
