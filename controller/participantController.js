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
      "name": "Abygail",
      "nim": "D0318001",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "rebeccaabygail2212@student.uns.ac.id"
    },
    {
      "name": "Adinda Fajar Putri",
      "nim": "D0319001",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "adindafajarp@student.uns.ac.id"
    },
    {
      "name": "Agung Hendrawan",
      "nim": "D0319002",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "hendrawanagung4@student.uns.ac.id"
    },
    {
      "name": "Agus Riyanto",
      "nim": "D0318003",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "agusriyanto02@student.uns.ac.id"
    },
    {
      "name": "Ahmad Syahdatul Kahfi",
      "nim": "D0319003",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "syahdatkahf15@student.uns.ac.id"
    },
    {
      "name": "Ainaul Mardliyah",
      "nim": "D0319004",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "ainmardliyah@student.uns.ac.id"
    },
    {
      "name": "Ainayya Al Fatikhah",
      "nim": "D0320001",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "ayya.ftk3@student.uns.ac.id"
    },
    {
      "name": "Airin Adelia I",
      "nim": "D0318004",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "airinadelia@student.uns.ac.id"
    },
    {
      "name": "Alicia Putri Pradana",
      "nim": "D0319005",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "aliciaputrip@student.uns.ac.id"
    },
    {
      "name": "Alif Faishal Farras",
      "nim": "D0317005",
      "prodi": "Sosiologi",
      "angkatan": 2017,
      "email": "aliffaishal@student.uns.ac.id"
    },
    {
      "name": "Alifia Nayla",
      "nim": "D0319006",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "Alifianaila12@student.uns.ac.id"
    },
    {
      "name": "Alifia salsabila",
      "nim": "D0319007",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "Alifiasals12@student.uns.ac.id"
    },
    {
      "name": "Alivia Nurul Hikma",
      "nim": "D0318008",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "iviialivia@student.uns.ac.id"
    },
    {
      "name": "Alya Puspita Rensi",
      "nim": "D0319008",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "alyapuspitar@student.uns.ac.id"
    },
    {
      "name": "Amanda Rahma Mazida",
      "nim": "D0320009",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "amanda_rahma20@student.uns.ac.id"
    },
    {
      "name": "Amma Ghifar Ibrahim",
      "nim": "D0319009",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "ammaghifar@student.uns.ac.id"
    },
    {
      "name": "Andreas Agafe Marbun",
      "nim": "D0318011",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "andreasagafe7@student.uns.ac.id"
    },
    {
      "name": "Andriana Azzahra",
      "nim": "D0320011",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "ernitasolo@student.uns.ac.id"
    },
    {
      "name": "angela diah natali putri",
      "nim": "d0320012",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "angelaputri@student.uns.ac.id"
    },
    {
      "name": "Ani Tri Widyastuti",
      "nim": "D0320013",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "anitri@student.uns.ac.id"
    },
    {
      "name": "Anindhita Suryo Putri",
      "nim": "D0320014",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "anindhitasuryo@student.uns.ac.id"
    },
    {
      "name": "Anis Dwi Lestari",
      "nim": "D0319011",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "anisdwilestari3@student.uns.ac.id"
    },
    {
      "name": "Anisya Putri Rahmadhini",
      "nim": "D0319012",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "anisyaputrira@student.uns.ac.id"
    },
    {
      "name": "Annisa Dwi Wardhani",
      "nim": "D0319013",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "annisadwiwardhani12@student.uns.ac.id"
    },
    {
      "name": "Ari Dwi Prasetyo",
      "nim": "D0319014",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "Aridwiprasetyo@student.uns.ac.id"
    },
    {
      "name": "Aristha Sepiana",
      "nim": "D0319015",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "aristhasepiana@student.uns.ac.id"
    },
    {
      "name": "Aura Jiwa Insani",
      "nim": "D0319016",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "aurajiwainsani132@student.uns.ac.id"
    },
    {
      "name": "Avnan Dian Anisa",
      "nim": "D0319017",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "realada1811@student.uns.ac.is"
    },
    {
      "name": "Ayu dwi wulandari",
      "nim": "D0318012",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "Ayudwi_1293@student.uns.ac.id"
    },
    {
      "name": "B.Mayang Sada",
      "nim": "D0320016",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "mayang301001@student.uns.ac.id"
    },
    {
      "name": "Bambang Pujo Legowo",
      "nim": "D0320018",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "bambangpujolegowo@student.uns.ac.id"
    },
    {
      "name": "Benedikta Kasih Radityaningsih",
      "nim": "D0320020",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "benediktakasih@student.uns.ac"
    },
    {
      "name": "Budi wulan suci ramadhani",
      "nim": "D0319018",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "bwsuci@student.uns.ac.id"
    },
    {
      "name": "Cherly Korisin",
      "nim": "D0319019",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "cherlykorisin@student.uns.ac.id"
    },
    {
      "name": "Chesa Amanda Marsela",
      "nim": "D0318015",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "chesaamandamarsela@student.uns.ac.id"
    },
    {
      "name": "Cisya Ratna Dharmeista",
      "nim": "D0320022",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "cisyaratna_23@student.uns.ac.id"
    },
    {
      "name": "Dayang Evitri Nur Faizah",
      "nim": "D0320024",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "dayangevitrinur@student.uns.ac.id"
    },
    {
      "name": "Derajat Mukhamad Putra Bangsa",
      "nim": "D0320025",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "derajatgt@stundents.uns.ac.id"
    },
    {
      "name": "Desi Putri Romadhoni",
      "nim": "D0319021",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "desiprrr@student.uns.ac.id"
    },
    {
      "name": "Desyntha Allrevviona Arla",
      "nim": "D0319023",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "allreviona14@student.uns.ac.id"
    },
    {
      "name": "DEVITA CAHYA WARDANI",
      "nim": "D0320026",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "devitaa2001@student.uns.ac.id"
    },
    {
      "name": "Dian Prihatiningsih",
      "nim": "D0319024",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "dianprihatiningsih1117@student.uns.ac.id"
    },
    {
      "name": "Dimas Alvin Ardiansyah",
      "nim": "D0320027",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "dimasalvin2242@student.uns.ac.id"
    },
    {
      "name": "dinda angela",
      "nim": "d0319025",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "dndangela22@student.uns.ac.id"
    },
    {
      "name": "Diva Andina Putri",
      "nim": "D0320028",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "divandinptr@student.uns.ac.id"
    },
    {
      "name": "Divea Della Rosa",
      "nim": "D0319026",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "diveadellarosa@student.uns.ac.id"
    },
    {
      "name": "Dwi Pangestuti",
      "nim": "D0320029",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "dwipangestuti18@student.uns.ac.id"
    },
    {
      "name": "Dwi Setyaningsih",
      "nim": "D0320030",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "dwisetya348@student.uns.ac.id"
    },
    {
      "name": "Erlina Widya Novelia",
      "nim": "D0320032",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "erlinawidya21@student.uns.ac.id"
    },
    {
      "name": "Erma Wulansari",
      "nim": "D0319027",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "ermawulansari13@student.uns.ac.id"
    },
    {
      "name": "Esa Jati Manunggal Sukma Adhi",
      "nim": "D0320033",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "esajati123@student.uns.ac.id"
    },
    {
      "name": "Faiz Salman Ar-rosyiid",
      "nim": "D0318020",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "Faizsalmann@student.uns.ac.id"
    },
    {
      "name": "Faizal Nur Iksan",
      "nim": "D0319028",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "faizalnuriksan@student.uns.ac.id"
    },
    {
      "name": "Fanny Rahmawati",
      "nim": "D0319030",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "fannyrahma@student.uns.ac.id"
    },
    {
      "name": "Fany Febriliany",
      "nim": "D0319031",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "ffbrlia@student.uns.ac.id"
    },
    {
      "name": "Fina Umi Nurjanah",
      "nim": "D0320036",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "finaumi20@student.uns.ac.id"
    },
    {
      "name": "Fio Debi Saputri",
      "nim": "D0317034",
      "prodi": "Sosiologi",
      "angkatan": 2017,
      "email": "fiodebi12@student.uns.ac.id"
    },
    {
      "name": "Fiqri Nanda Al Kahfi Putra",
      "nim": "D0319032",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "fiqrin14@student.uns.ac.id"
    },
    {
      "name": "Firman Achanta Evan",
      "nim": "D0320037",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "firmanevan51@student.uns.ac.id"
    },
    {
      "name": "Fithriana Widadti",
      "nim": "D0320038",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "fithrianaw02@student.uns.ac.id"
    },
    {
      "name": "Fransiska Adinda Mercujiwa",
      "nim": "D0319033",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "fransiskaadinda@student.uns.ac.id"
    },
    {
      "name": "GALUH RESTU KINANTI",
      "nim": "D0319035",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "galuhrestuk@student.uns.ac.id"
    },
    {
      "name": "Griselda Levina Guhsniananda",
      "nim": "D0319036",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "griseldalg.11@student.uns.ac.id"
    },
    {
      "name": "Haikal Akmal Ajikontea",
      "nim": "D0320094",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "haikalakmala26@student.uns.ac.id"
    },
    {
      "name": "Hana Nur Azizah",
      "nim": "D0318024",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "hanaazizah@student.uns.ac.id"
    },
    {
      "name": "Hanif Muhammad Mufid",
      "nim": "D0320049",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "hanifmufid@student.uns.ac.id"
    },
    {
      "name": "Hanifa Salsabila",
      "nim": "D0318025",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "Hanifasals@student.uns.ac.id"
    },
    {
      "name": "Humaira Putri Ardelia",
      "nim": "D0319038",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "airaput04@student.uns.ac.id"
    },
    {
      "name": "Ifdal Ichlasul Amal",
      "nim": "D0319039",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "ifdalamal@student.uns.ac.id"
    },
    {
      "name": "Ima Fitri Budi Anggraeni",
      "nim": "D0320041",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "ima.fitri.25@student.ac.id"
    },
    {
      "name": "INTAN NUR FITRIYANA",
      "nim": "D0320043",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "fitriyanaintan@student.uns.ac.id"
    },
    {
      "name": "Irsyad Ravi Ranindito",
      "nim": "D0318026",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "raviirsyad@student.uns.ac.id"
    },
    {
      "name": "Izza Mafazatun Nafa 'Ula",
      "nim": "D0318027",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "Izzamafazatunnafa31@student.uns.ac.id"
    },
    {
      "name": "Jayanti Brillia Setyaningrum",
      "nim": "D0319040",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "jayantibrillia158@student.uns.ac.id"
    },
    {
      "name": "Khofifah Miftakhul Jannah",
      "nim": "D0320047",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "khofifahjannah30@student.uns.ac.id"
    },
    {
      "name": "Laila Khairunnisa R",
      "nim": "D0319043",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "lailakhairunnisa@student.uns.ac.id"
    },
    {
      "name": "Laila Khoirun Nisak",
      "nim": "D0318029",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "lailakhoirun17@student.uns.ac.id"
    },
    {
      "name": "Lidwina Linda Alodia Sea",
      "nim": "D0319044",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "lidwinalinda22@student.uns.ac.id"
    },
    {
      "name": "Lilik Sukmawati",
      "nim": "D0320051",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "liliksukmaa19@student.uns.ac.id"
    },
    {
      "name": "Ludmilla Kartika Mukti",
      "nim": "D0318033",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "ludmillaemili@Student.uns.ac.id"
    },
    {
      "name": "M fadhel hikam",
      "nim": "D0318037",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "hikam.fadhel@student.uns.ac.id"
    },
    {
      "name": "Mahmud tri harjanto",
      "nim": "D0318034",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "jared.sujarwo007@student.uns.ac.id"
    },
    {
      "name": "Mahoca Arkalita",
      "nim": "D0320052",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "mahocarkalita@student.uns.ac.id"
    },
    {
      "name": "Maria Alicia Cahya Asmara Purwa Widawati",
      "nim": "D0318035",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "lisaalicia19@student.uns.ac.id"
    },
    {
      "name": "Maria Pratiwi",
      "nim": "D0319046",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "mariapratiwi@uns.ac.id"
    },
    {
      "name": "Meiangel Enggaringtyas Mustika Duta",
      "nim": "D0320054",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "meiangelenggar@student.uns.ac.id"
    },
    {
      "name": "Melania Ika Wardani",
      "nim": "D0319047",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "melaniaika25@student.uns.ac.id"
    },
    {
      "name": "Mir'atun Nisa'",
      "nim": "D0319048",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "miranisa2611@student.uns.ac.id"
    },
    {
      "name": "Mirza Hamsadarma",
      "nim": "D0320055",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "mirzahd2002@student.uns.ac.id"
    },
    {
      "name": "Mufida Dwi Rahmawati",
      "nim": "D0320056",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "mufidarahma3@student.uns.ac.id"
    },
    {
      "name": "Muhammad Asih Sofi Muzaqqi",
      "nim": "D0320057",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "Muhasmuzaqqi@student.uns.ac.id"
    },
    {
      "name": "Muhammad Ihsan Notonegoro",
      "nim": "D0320058",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "Ihsan@student.uns.ac.id"
    },
    {
      "name": "Muhammad Rejendranad Reynaldi",
      "nim": "D0318038",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "rajen.reynal@student.uns.ac.id"
    },
    {
      "name": "Muhammad Rinaldy",
      "nim": "D0320059",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "aldy.kozin@student.uns.ac.id"
    },
    {
      "name": "Muhammad Sholahuddin Al Farras",
      "nim": "D0319045",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "muhammadsholahuddinalfarras@student.uns.ac.id"
    },
    {
      "name": "mutia nabila nurminnandha",
      "nim": "D0318040",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "mutianabila331@student.uns.ac.id"
    },
    {
      "name": "Nabiil Muchyar Pradipta",
      "nim": "D0320061",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "nabiilpradipta20@student.uns.ac.id"
    },
    {
      "name": "Nabila salsabila",
      "nim": "D0318041",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "nabila_salsa31@student.uns.ac.id"
    },
    {
      "name": "Nabilla",
      "nim": "D0320062",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "nabillaa@student.uns.ac.id"
    },
    {
      "name": "Nabilla Cahyani Eka Putri",
      "nim": "D0320063",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "nabillacahyani@student.uns.ac.id"
    },
    {
      "name": "Nadia Amelia",
      "nim": "D0319049",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "Nadiaamelia14@student.uns.ac.id"
    },
    {
      "name": "Nadia Aulia Ramadhan",
      "nim": "D0318043",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "nadiaauliara@student.uns.ac.id"
    },
    {
      "name": "Nadya Kurniawati",
      "nim": "D0319050",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "nadyakurniawati85@student.uns.ac.id"
    },
    {
      "name": "Nanda Belva Kemala Putri",
      "nim": "D0319051",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "nandabelva28@student.uns.ac.id"
    },
    {
      "name": "Naufal Ammar Haidar Adji",
      "nim": "D0317055",
      "prodi": "Sosiologi",
      "angkatan": 2017,
      "email": "nammarha@student.uns.ac.id"
    },
    {
      "name": "Nita Andryanti",
      "nim": "D0320096",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "andryantinita@student.uns.ac.id"
    },
    {
      "name": "Nur Halimatul Sa'diyah",
      "nim": "D0320098",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "nurhalimatul@student.uns.ac.id"
    },
    {
      "name": "Nuriyani Kusumastuti",
      "nim": "D0319052",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "nuriyanikusumastuti01@student.uns.ac.id"
    },
    {
      "name": "Nurul fauziah",
      "nim": "D0319053",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "Nurulfauziah28@student.uns.ac.id"
    },
    {
      "name": "Pandan Wangi Sukma Listyono Putri",
      "nim": "D0320065",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "pwslputri@student.uns.ac.id"
    },
    {
      "name": "Patrick Putra Dermawan",
      "nim": "D0318050",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "patrickputrad01@student.uns.ac.id"
    },
    {
      "name": "Pramesti Ayu Pitaloka",
      "nim": "D0319054",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "pramestiayu@student.uns.ac.id"
    },
    {
      "name": "Pratiwi Noor Utami",
      "nim": "D0319055",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "Pratiwinoor91@student.uns.ac.id"
    },
    {
      "name": "Putri Ari Suryani",
      "nim": "D0317062",
      "prodi": "Sosiologi",
      "angkatan": 2017,
      "email": "putriari784@student.uns.ac.id"
    },
    {
      "name": "Rachelia Devi",
      "nim": "D0319056",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "racheliadevi33@student.uns.ac.id"
    },
    {
      "name": "Raditia Yoke Pratama",
      "nim": "D0318051",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "radityayoke@student.uns.ac.id"
    },
    {
      "name": "Rahmasita Sekar Lumingga",
      "nim": "D0320101",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "rahmasita24@student.uns.ac.id"
    },
    {
      "name": "Ratri Yuniarsih",
      "nim": "D0317065",
      "prodi": "Sosiologi",
      "angkatan": 2017,
      "email": "ratriyuni9@student.uns.ac.id"
    },
    {
      "name": "Resha Aziz Afrizal",
      "nim": "D0319060",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "Aziz.afrizal98@student.uns.ac.id"
    },
    {
      "name": "Rhoesita Bhashukesti",
      "nim": "D0320067",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "rhoesitabhashukesti@student.uns.ac.id"
    },
    {
      "name": "Ridlo Febi Wicaksono",
      "nim": "D0318053",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "ridlofebiw28@student.uns.ac.id"
    },
    {
      "name": "Rikmadenda Arya Mustika",
      "nim": "D0319063",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "rikmadendamustika_093@student.uns.ac.id"
    },
    {
      "name": "Risma Nur Chamidah",
      "nim": "D0318055",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "risma.chamidah9@student.uns.ac.id"
    },
    {
      "name": "Risqi Melinia",
      "nim": "D0318056",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "risqimel@student.uns.ac.id"
    },
    {
      "name": "Rista Septiana",
      "nim": "D0319064",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "ristasep@student.uns.ac.id"
    },
    {
      "name": "rizka widya ramadani",
      "nim": "D0320068",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "eveningpress9@student.uns.ac.id"
    },
    {
      "name": "Rizqi Khoirun Nisa Faridatul Hidayat",
      "nim": "D0320069",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "rizqinisa.07@student.uns.ac.id"
    },
    {
      "name": "Rofi'atullaili",
      "nim": "D0318057",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "Rofiatullaili2@student.uns.ac.id"
    },
    {
      "name": "Rosita Rose Mary",
      "nim": "D0318059",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "rositarosemary@student.uns.ac.id"
    },
    {
      "name": "Rufaidah Fajriati Andini",
      "nim": "D0318060",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "rufaidahfa@student.uns.ac.id"
    },
    {
      "name": "Ruhul Malik Akbar",
      "nim": "D0319068",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "ruhulmalik5@student.uns.ac.id"
    },
    {
      "name": "Safa Yonanta Putri",
      "nim": "D0319069",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "afasafayonput@student.uns.ac.id"
    },
    {
      "name": "Salsabila Garnis",
      "nim": "D0319070",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "Salsabilagp13@student.uns.ac.id"
    },
    {
      "name": "Salsabila Salma",
      "nim": "D0319071",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "salsasalma59@student.uns.ac.id"
    },
    {
      "name": "Sekar Mayangsari",
      "nim": "D0319073",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "sekarmayangsari72@student.uns.ac.id"
    },
    {
      "name": "Sekar Mutiara Rachmi Putri Setyawan",
      "nim": "D0319074",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "sekarmutiara2301@student.uns.ac.id"
    },
    {
      "name": "Selfi Khairunnisa",
      "nim": "D0318062",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "selfikhairunnisaa@student.uns.ac.id"
    },
    {
      "name": "Shafina Danti Farranissa",
      "nim": "D0320074",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "shafinadanti@student.uns.ac.id"
    },
    {
      "name": "Shinta Dewi",
      "nim": "D0320076",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "Shintadewii22@student.uns.ac.id"
    },
    {
      "name": "Shinta Novia Sukma",
      "nim": "D0318063",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "shinta.novia05@student.uns.ac.id"
    },
    {
      "name": "Shintia Nur Kartini",
      "nim": "D0318064",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "shintiakartini@student.uns.ac.id"
    },
    {
      "name": "Siti Faidah",
      "nim": "D0319076",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "sitifaidah350@student.uns.ac.id"
    },
    {
      "name": "Siti Lailatul Fitriyah",
      "nim": "D0320077",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "sitilailatulfitriyah@student.uns.ac.id"
    },
    {
      "name": "Sri Gangga Mahendra Dewa",
      "nim": "D0318067",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "sriganggamahendradewa@student.uns.ac.id"
    },
    {
      "name": "Sri Rahayu",
      "nim": "D0320078",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "yayuklola8602@student.uns.ac.id"
    },
    {
      "name": "Stefanus Rafael Ihot Hutabarat",
      "nim": "D0319077",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "ralphness.everywhere@student.uns.ac.id"
    },
    {
      "name": "Sukma Dinda Cahyaningtyas",
      "nim": "D0318068",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "sukmadindac@student.uns.ac.id"
    },
    {
      "name": "Syifa Ainun Nisa",
      "nim": "D0320079",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "syifan2112@student.uns.ac.id"
    },
    {
      "name": "Tegar Pangestu",
      "nim": "D0319080",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "Tegarpangestu73@student.uns.ac.id"
    },
    {
      "name": "Teresa Elsa Widyanita",
      "nim": "D0318069",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "elsarere4@student.uns.ac.id"
    },
    {
      "name": "Teresa Keyra Santita",
      "nim": "D0320080",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "teresakeyraaa@student.uns.ac.id"
    },
    {
      "name": "Theodorus Bintang Sihsetya Rinjani",
      "nim": "D0320081",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "theodorus638@student.uns.ac.id"
    },
    {
      "name": "Tiyan Qurrotaa'yun",
      "nim": "D0320082",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "tiyanqrrtyn@student.uns.ac.id"
    },
    {
      "name": "ummul Hidayah",
      "nim": "D0320083",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "ummulhdyh@student.uns.ac.id"
    },
    {
      "name": "Vaeda Nur Pratama",
      "nim": "D0319081",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "vaedanurpratama6@student.uns.ac.id"
    },
    {
      "name": "Valinda Calonica Rosidi",
      "nim": "D0318071",
      "prodi": "Sosiologi",
      "angkatan": 2018,
      "email": "valindacal12@student.uns.ac.id"
    },
    {
      "name": "Vanesha Salsa Bella",
      "nim": "D0320084",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "vaneshasalsabella08@student.uns.ac.id"
    },
    {
      "name": "Vega Putra Aswatama",
      "nim": "D0320086",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "Vegaaswatama@student.uns.ac.id"
    },
    {
      "name": "Vendra Panji Septyaji",
      "nim": "D0320087",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "vendrapanji@student.uns.ac.id"
    },
    {
      "name": "Via Dewi H",
      "nim": "D0319082",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "viadewi_21@student.uns.ac.id"
    },
    {
      "name": "Vionika Kurnia Arini",
      "nim": "D0320089",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "vionikaka27@student.uns.ac.id"
    },
    {
      "name": "Wika Rohani",
      "nim": "D0319083",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "Wika_rohani@student.uns.ac.id"
    },
    {
      "name": "Woroajeng Pranastuti",
      "nim": "D0319084",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "woroajengpranastuti11@student.uns.ac.id"
    },
    {
      "name": "Yahya Hidayat",
      "nim": "D0319085",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "yahyahi1029@student.uns.ac.id"
    },
    {
      "name": "Yanuar Dian Yusuffi",
      "nim": "D0319086",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "yanuardian_yusuff45@student.uns.ac.id"
    },
    {
      "name": "Yoga Catur Kautsar",
      "nim": "D0319087",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "yogaceka@student.uns.ac.id"
    },
    {
      "name": "Yoga Wisnu Mukti",
      "nim": "D0319088",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "yowisnaknu@student.uns.ac.id"
    },
    {
      "name": "Yuniar Reza Ardifa",
      "nim": "D0319089",
      "prodi": "Sosiologi",
      "angkatan": 2019,
      "email": "reza.ardifa0601@student.uns.ac.id"
    },
    {
      "name": "Zahra Vianda Putri",
      "nim": "D0320091",
      "prodi": "Sosiologi",
      "angkatan": 2020,
      "email": "zahraavnd21@student.uns.ac.id"
    }
  ];

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.email = _participant.email;
    participant.session.id = "6024dcade5ad344951df0c08";
    participant.session.number = 2;
    participant.session.min = new Date("2021-02-20T07:00:00.000Z");
    participant.session.max = new Date("2021-02-20T18:00:00.000Z");

    // Save and validate
    participant.save(function (err) {
      if (err) return res.status(500).json(err);

      
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
