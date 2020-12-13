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
      "email": "Ilam_mufid12@student.uns.ac.id",
      "name": "I'lam Muhamad mufid",
      "nim": "I0417041",
      "angkatan": 2017
    },
    {
      "no": 2,
      "email": "ilhamatmaja@student.uns.ac.id",
      "name": "Muhammad Ilham Arbi Atmaja",
      "nim": "I0417061",
      "angkatan": 2017
    },
    {
      "no": 3,
      "email": "ranitriandita@student.uns.ac.id",
      "name": "Rani Triandita Budhiayuningsih",
      "nim": "I0417073",
      "angkatan": 2017
    },
    {
      "no": 4,
      "email": "ananditofrom@student.uns.ac.id",
      "name": "Anandito Adam Pratama",
      "nim": "I0418008",
      "angkatan": 2018
    },
    {
      "no": 5,
      "email": "anaszrachmad@student.uns.ac.id",
      "name": "ANAS ZAKIYUDIN RACHMAD",
      "nim": "I0418009",
      "angkatan": 2018
    },
    {
      "no": 6,
      "email": "arvianasmarahadi18@student.uns.ac.id",
      "name": "Arvian asmarahadi",
      "nim": "I0418015",
      "angkatan": 2018
    },
    {
      "no": 7,
      "email": "farrelzahidibrahim@student.uns.ac.id",
      "name": "Farrel Zahid Ibrahim",
      "nim": "I0418032",
      "angkatan": 2018
    },
    {
      "no": 8,
      "email": "firmansyah_alwi45@student.uns.ac.id",
      "name": "Firmansyah Alwi Sasongko",
      "nim": "I0418033",
      "angkatan": 2018
    },
    {
      "no": 9,
      "email": "geraldyrivan@student.uns.ac.id",
      "name": "Geraldy Rivan Pratama",
      "nim": "I0418036",
      "angkatan": 2018
    },
    {
      "no": 10,
      "email": "j.onesimus123@student.uns.ac.id",
      "name": "Jeremy Onesimus Carnagie",
      "nim": "I0418044",
      "angkatan": 2018
    },
    {
      "no": 11,
      "email": "haikal099@student.uns.ac.id",
      "name": "Mohamad Haikal Kenang Octori",
      "nim": "I0418050",
      "angkatan": 2018
    },
    {
      "no": 12,
      "email": "farisalfarisi670@student.uns.ac.id",
      "name": "muhammad takbir alfarisi",
      "nim": "i0418062",
      "angkatan": 2018
    },
    {
      "no": 13,
      "email": "shabrinaalifiaalmas@student.uns.ac.id",
      "name": "Shabrina Alifia Almas",
      "nim": "I0418075",
      "angkatan": 2018
    },
    {
      "no": 14,
      "email": "margarethatari18@student.uns.ac.id",
      "name": "Sri Teguh Lestari",
      "nim": "I0418076",
      "angkatan": 2018
    },
    {
      "no": 15,
      "email": "ykukuh@student.uns.ac.id",
      "name": "Yosafat Kukuh Priambodo",
      "nim": "I0418083",
      "angkatan": 2018
    },
    {
      "no": 16,
      "email": "zilmyefis@student.uns.ac.id",
      "name": "Zilmy Efis Priyatama",
      "nim": "I0418085",
      "angkatan": 2018
    },
    {
      "no": 17,
      "email": "Zufarmaulana@student.uns.ac.id",
      "name": "Zufar Maulana",
      "nim": "I0418086",
      "angkatan": 2018
    },
    {
      "no": 18,
      "email": "adriantmj@student.uns.ac.id",
      "name": "adrian triatmojo",
      "nim": "I0419002",
      "angkatan": 2019
    },
    {
      "no": 19,
      "email": "ahmadazza@student.uns.ac.id",
      "name": "Ahmad Azza Kholiilullah",
      "nim": "I0419006",
      "angkatan": 2019
    },
    {
      "no": 20,
      "email": "ahmadfahmijml@student.uns.ac.id",
      "name": "Ahmad Fahmi J",
      "nim": "I0419007",
      "angkatan": 2019
    },
    {
      "no": 21,
      "email": "airlangga03@student.uns.ac.id",
      "name": "Airlangga Hamdan Pratama",
      "nim": "I0419009",
      "angkatan": 2019
    },
    {
      "no": 22,
      "email": "hanifadelfiera09@student.uns.ac.id",
      "name": "Hanifa Delfiera",
      "nim": "I0419037",
      "angkatan": 2019
    },
    {
      "no": 23,
      "email": "ilhamkhoirudin1201@student.uns.ac.id",
      "name": "Ilham Khoirudin",
      "nim": "I0419040",
      "angkatan": 2019
    },
    {
      "no": 24,
      "email": "jovannisimahesta@student.uns.ac.id",
      "name": "Jovannisi Mahesta Priangga",
      "nim": "I0419046",
      "angkatan": 2019
    },
    {
      "no": 25,
      "email": "maulana.21381@student.uns.ac.id",
      "name": "Maulana Fakhri Masykur",
      "nim": "I0419052",
      "angkatan": 2019
    },
    {
      "no": 26,
      "email": "budiutama484@student.uns.ac.id",
      "name": "Muhammad Budi Utama",
      "nim": "I0419059",
      "angkatan": 2019
    },
    {
      "no": 27,
      "email": "haekalrjmt123@student.uns.ac.id",
      "name": "Muhammad Haekal Darmawan",
      "nim": "I0419061",
      "angkatan": 2019
    },
    {
      "no": 28,
      "email": "Nariskitito14@student.uns.ac.id",
      "name": "Narisqi Wimatiota",
      "nim": "I0419070",
      "angkatan": 2019
    },
    {
      "no": 29,
      "email": "viozgaul@student.uns.ac.id",
      "name": "Noval Fattah Alfaiz",
      "nim": "I0419072",
      "angkatan": 2019
    },
    {
      "no": 30,
      "email": "qolisfandrairawan@student.uns.ac.id",
      "name": "Qolis Fandra Irawan",
      "nim": "I0419076",
      "angkatan": 2019
    },
    {
      "no": 31,
      "email": "ranidwilarasati2018@student.uns.ac.id",
      "name": "Rani Dwi Larasati",
      "nim": "I0419081",
      "angkatan": 2019
    },
    {
      "no": 32,
      "email": "samsuldarwis9865@student.uns.ac.id",
      "name": "Samsul Alang Bin Darwis",
      "nim": "I0419088",
      "angkatan": 2019
    },
    {
      "no": 33,
      "email": "treza.eja@student.uns.ac.id",
      "name": "Treza Daffa Ardy",
      "nim": "I0419094",
      "angkatan": 2019
    },
    {
      "no": 34,
      "email": "yogieMuhammadLutfi@student.uns.ac.id",
      "name": "Yogie Muhammad Lutfi",
      "nim": "I0419098",
      "angkatan": 2019
    },
    {
      "no": 35,
      "email": "zubaraal19@student.uns.ac.id",
      "name": "Zubara Al Hadiiddiin",
      "nim": "I0419100",
      "angkatan": 2019
    },
    {
      "no": 36,
      "email": "adiwinata@student.uns.ac.id",
      "name": "Adi Winata",
      "nim": "I0420002",
      "angkatan": 2020
    },
    {
      "no": 37,
      "email": "Ahmad_deni321@student.uns.ac.id",
      "name": "Ahmad Deni Puji Cahyono",
      "nim": "I0420009",
      "angkatan": 2020
    },
    {
      "no": 38,
      "email": "faizrahardi2002@student.uns.ac.id",
      "name": "Ahmad Faiz Rahardi",
      "nim": "I0420010",
      "angkatan": 2020
    },
    {
      "no": 39,
      "email": "andri.triyuliansyah@student.uns.ac.id",
      "name": "Andri Tri Yuliansyah",
      "nim": "I0420024",
      "angkatan": 2020
    },
    {
      "no": 40,
      "email": "ariefdwinurbarokah@student.uns.ac.id",
      "name": "Arief Dwi Nur Barokah",
      "nim": "I0420029",
      "angkatan": 2020
    },
    {
      "no": 41,
      "email": "ariqmrafi@student.uns.ac.id",
      "name": "Ariq Muhammad Rafi",
      "nim": "I0420030",
      "angkatan": 2020
    },
    {
      "no": 42,
      "email": "andradanendra83@student.uns.ac.id",
      "name": "Danendra Anggara Putra",
      "nim": "I0420039",
      "angkatan": 2020
    },
    {
      "no": 43,
      "email": "denar.prambana@student.uns.ac.id",
      "name": "denar prambana",
      "nim": "I0420040",
      "angkatan": 2020
    },
    {
      "no": 44,
      "email": "budisetyawand002@student.uns.ac.id",
      "name": "Dwi Budisetyawan",
      "nim": "I0420045",
      "angkatan": 2020
    },
    {
      "no": 45,
      "email": "farrelregannanta@student.uns.ac.id",
      "name": "Farrel Julio Regannanta",
      "nim": "I0420051",
      "angkatan": 2020
    },
    {
      "no": 46,
      "email": "gemaelwalie@student.uns.ac.id",
      "name": "Gema Elwalie",
      "nim": "I0420055",
      "angkatan": 2020
    },
    {
      "no": 47,
      "email": "kid.gusti@student.uns.ac.id",
      "name": "Gusti Kid Faiq Syah",
      "nim": "I0420057",
      "angkatan": 2020
    },
    {
      "no": 48,
      "email": "ikbarsyah@student.uns.ac.id",
      "name": "Ikbar Syah Fahlevi",
      "nim": "I0420064",
      "angkatan": 2020
    },
    {
      "no": 49,
      "email": "imaduddinfaiz@student.uns.ac.id",
      "name": "Imaduddin Muhammad Faiz",
      "nim": "I0420065",
      "angkatan": 2020
    },
    {
      "no": 50,
      "email": "sholikhahmaraa@student.uns.ac.id",
      "name": "Mar'atu Sholikhah",
      "nim": "I0420071",
      "angkatan": 2020
    },
    {
      "no": 51,
      "email": "muhhaidaralghifari@student.uns.ac.id",
      "name": "Muh Haidar Al Ghifari",
      "nim": "I0420075",
      "angkatan": 2020
    },
    {
      "no": 52,
      "email": "muhamadbagus@student.uns.ac.id",
      "name": "Muhamad Bagus Tri Yuliyanto",
      "nim": "I0420077",
      "angkatan": 2020
    },
    {
      "no": 53,
      "email": "adzinfitra22@student.uns.ac.id",
      "name": "Muhammad Adzin Fitra",
      "nim": "I0420079",
      "angkatan": 2020
    },
    {
      "no": 54,
      "email": "Mdaffaalifianto1604@student.uns.ac.id",
      "name": "Muhammad Daffa Alifianto",
      "nim": "I0420085",
      "angkatan": 2020
    },
    {
      "no": 55,
      "email": "Muhammadfauzan3007@student.uns.ac.id",
      "name": "Muhammad Fauzan Arfandi Ahzhan",
      "nim": "I0420086",
      "angkatan": 2020
    },
    {
      "no": 56,
      "email": "ivanfanani@student.uns.ac.id",
      "name": "Muhammad Ivan Fanani",
      "nim": "I0420088",
      "angkatan": 2020
    },
    {
      "no": 57,
      "email": "muhammadnaufalzaky@student.uns.ac.id",
      "name": "Muhammad Naufal Zaky",
      "nim": "I0420089",
      "angkatan": 2020
    },
    {
      "no": 58,
      "email": "aarga486@student.uns.ac.id",
      "name": "Muhammad Rizky Arga Wijaya",
      "nim": "I0420091",
      "angkatan": 2020
    },
    {
      "no": 59,
      "email": "taufiq.maulana@student.uns.ac.id",
      "name": "Muhammad Taufiq Maulana Rizki",
      "nim": "I0420096",
      "angkatan": 2020
    },
    {
      "no": 60,
      "email": "jihadnajibs123@student.uns.ac.id",
      "name": "Najib Jihad Ahmadi",
      "nim": "I0420101",
      "angkatan": 2020
    },
    {
      "no": 61,
      "email": "naufalnursaifullah@student.uns.ac.id",
      "name": "Naufal Nur Saifullah",
      "nim": "I0420103",
      "angkatan": 2020
    },
    {
      "no": 62,
      "email": "naufalsyafiqmaulana4@student.uns.ac.id",
      "name": "Naufal Syafiq Maulana",
      "nim": "I0420105",
      "angkatan": 2020
    },
    {
      "no": 63,
      "email": "nicoarya24@student.uns.ac.id",
      "name": "Nico Arya Wijaya",
      "nim": "I0420107",
      "angkatan": 2020
    },
    {
      "no": 64,
      "email": "nurmuhammad@student.uns.ac.id",
      "name": "Nur Muhammad",
      "nim": "I0420109",
      "angkatan": 2020
    },
    {
      "no": 65,
      "email": "panjimaulanaibrahim@student.uns.ac.id",
      "name": "Panji Maulana Ibrahim",
      "nim": "I0420110",
      "angkatan": 2020
    },
    {
      "no": 66,
      "email": "althaaf.dhaneswara@student.uns.ac.id",
      "name": "Raden Althaaf Ulwandaffa Dhaneswara",
      "nim": "I0420113",
      "angkatan": 2020
    },
    {
      "no": 67,
      "email": "rezaabdulrahman@student.uns.ac.id",
      "name": "reza abdul rahman",
      "nim": "I0420119",
      "angkatan": 2020
    },
    {
      "no": 68,
      "email": "chy.stwn78_rzky.uns.ac.id",
      "name": "Rizky Cahyo Setiawan",
      "nim": "I0420123",
      "angkatan": 2020
    },
    {
      "no": 69,
      "email": "rizkyfadli_22@student.uns.ac.id",
      "name": "Rizky Fadli Ramdhani",
      "nim": "I0420124",
      "angkatan": 2020
    },
    {
      "no": 70,
      "email": "saldiramdani@student.uns.ac.id",
      "name": "Saldi Ramdani",
      "nim": "I0420128",
      "angkatan": 2020
    },
    {
      "no": 71,
      "email": "sintaragil87@student.uns.ac.id",
      "name": "Sinta Ragil Saputri",
      "nim": "I0420132",
      "angkatan": 2020
    },
    {
      "no": 72,
      "email": "Syadandi_adhari21@student.uns.ac.id",
      "name": "Syadandi Adhari",
      "nim": "I0420134",
      "angkatan": 2020
    },
    {
      "no": 73,
      "email": "syrf.abdrzzq@student.uns.ac.id",
      "name": "Syarief Abdurrazzaq",
      "nim": "I0420137",
      "angkatan": 2020
    },
    {
      "no": 74,
      "email": "wildanbaraalkautsar@student.uns.ac.id",
      "name": "Wildan Bara Al-Kautsar",
      "nim": "I0420145",
      "angkatan": 2020
    },
    {
      "no": 75,
      "email": "yakluazza@student.uns.ac.id",
      "name": "Yaklu Azza Jaruka",
      "nim": "I0420147",
      "angkatan": 2020
    },
    {
      "no": 76,
      "email": "djentoe@student.uns.ac.id",
      "name": "Yokanan Gustino Djentoe",
      "nim": "I0420149",
      "angkatan": 2020
    },
    {
      "no": 77,
      "email": "akbarbayups@student.uns.ac.id",
      "name": "Akbar Bayu Pamungkas Sutowijoyo",
      "nim": "I0420153",
      "angkatan": 2020
    },
    {
      "no": 78,
      "email": "Albertosetiawan19@student.uns.ac.id",
      "name": "Alberto Setiawan",
      "nim": "I0420154",
      "angkatan": 2020
    },
    {
      "no": 79,
      "email": "alvyanrizandy@student.uns.ac.id",
      "name": "Alvyan Naufal Rizandy",
      "nim": "I0420155",
      "angkatan": 2020
    },
  ]

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.email = _participant.email;
    participant.session.id = "5fd5b4368430463e5853f063";
    participant.session.number = 3;
    participant.session.min = new Date("2020-12-16T08:00:00.000Z");
    participant.session.max = new Date("2020-12-16T14:00:00.000Z");

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
