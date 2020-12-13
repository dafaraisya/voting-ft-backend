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
      "email": "afindanurul@student.uns.ac.id",
      "name": "Afinda Nurul Safitri",
      "nim": "I0617004",
      "angkatan": 2017
    },
    {
      "no": 2,
      "email": "difabalqist@student.uns.ac.id",
      "name": "Difa Ayu Balqist Ramadhani",
      "nim": "I0617016",
      "angkatan": 2017
    },
    {
      "no": 3,
      "email": "muhammadaryapersada@student.uns.ac.id",
      "name": "Muhammad Arya Persada",
      "nim": "I0618029",
      "angkatan": 2018
    },
    {
      "no": 4,
      "email": "yunus.abdurrahman21@student.uns.ac.id",
      "name": "Yunus Abdurrahman Al Banna",
      "nim": "I0618045",
      "angkatan": 2018
    },
    {
      "no": 5,
      "email": "afiyasalma@student.uns.ac.id",
      "name": "Afiya Salma Dzahabiyya",
      "nim": "I0619001",
      "angkatan": 2019
    },
    {
      "no": 6,
      "email": "alinarputri0102@student.uns.ac.id",
      "name": "Almira Nur Aryani Putri",
      "nim": "I0619003",
      "angkatan": 2019
    },
    {
      "no": 7,
      "email": "Aqilahsyf@student.uns.ac.id",
      "name": "Aqilah Syifa Shabrina",
      "nim": "I0619006",
      "angkatan": 2019
    },
    {
      "no": 8,
      "email": "arzaqnavy@student.uns.ac.id",
      "name": "Arzaq Taukida",
      "nim": "I0619007",
      "angkatan": 2019
    },
    {
      "no": 9,
      "email": "celinesolagracia@student.uns.ac.id",
      "name": "celine sola gracia l.",
      "nim": "I0619011",
      "angkatan": 2019
    },
    {
      "no": 10,
      "email": "dhea.herbila1602@student.uns.ac.id",
      "name": "Dhea Ayu Herbila Sari",
      "nim": "I0619013",
      "angkatan": 2019
    },
    {
      "no": 11,
      "email": "fatchur2105@student.uns.ac.id",
      "name": "Fatchur Rohman",
      "nim": "I0619019",
      "angkatan": 2019
    },
    {
      "no": 12,
      "email": "lidyaariyani@student.uns.ac.id",
      "name": "Lidya Ariyani",
      "nim": "I0619025",
      "angkatan": 2019
    },
    {
      "no": 13,
      "email": "lintangayus24@student.uns.ac.id",
      "name": "Lintang Ayu Susiloningrum",
      "nim": "I0619026",
      "angkatan": 2019
    },
    {
      "no": 14,
      "email": "rahmaptrn@student.uns.ac.id",
      "name": "Rahma Putri Nabiilah",
      "nim": "I0619033",
      "angkatan": 2019
    },
    {
      "no": 15,
      "email": "riccapadyansari@student.uns.ac.id",
      "name": "Ricca Padyansari",
      "nim": "I0619034",
      "angkatan": 2019
    },
    {
      "no": 16,
      "email": "arinisiska288@student.uns.ac.id",
      "name": "Siska Arini",
      "nim": "I0619041",
      "angkatan": 2019
    },
    {
      "no": 17,
      "email": "syafaputri@student.uns.ac.id",
      "name": "Syafa Putri Innasia",
      "nim": "I0619042",
      "angkatan": 2019
    },
    {
      "no": 18,
      "email": "addhierm@student.uns.ac.id",
      "name": "Adhie Rum Muttaqin",
      "nim": "I0620001",
      "angkatan": 2020
    },
    {
      "no": 19,
      "email": "adityawahyu@student.uns.ac.id",
      "name": "Aditya Wahyu Hidayat",
      "nim": "I0620002",
      "angkatan": 2020
    },
    {
      "no": 20,
      "email": "maltufakmal22n@student.uns.ac.id",
      "name": "AKMAL MALTUF NAFIUDIN",
      "nim": "I0620004",
      "angkatan": 2020
    },
    {
      "no": 21,
      "email": "annisadyans27@student.uns.ac.id",
      "name": "Annisa Dyan Septyana",
      "nim": "I0620005",
      "angkatan": 2020
    },
    {
      "no": 22,
      "email": "annitaipu@student.uns.ac.id",
      "name": "Annita Indah Putri Utami",
      "nim": "I0620006",
      "angkatan": 2020
    },
    {
      "no": 23,
      "email": "ardhazean17@student.uns.ac.id",
      "name": "Ardha Zean Sulthan Baharani",
      "nim": "I0620007",
      "angkatan": 2020
    },
    {
      "no": 24,
      "email": "ardikiranindra@student.uns.ac.id",
      "name": "Ardi Kiranindra",
      "nim": "I0620008",
      "angkatan": 2020
    },
    {
      "no": 25,
      "email": "arfiliadwiyanti318@student.uns.ac.id",
      "name": "Arfilia Dwiyanti",
      "nim": "I0620009",
      "angkatan": 2020
    },
    {
      "no": 26,
      "email": "aryaprdn3702@student.uns.ac.id",
      "name": "Arya Perdana Nusantara",
      "nim": "I0620010",
      "angkatan": 2020
    },
    {
      "no": 27,
      "email": "auliahanifa@student.uns.ac.id",
      "name": "Aulia Hanifa",
      "nim": "I0620011",
      "angkatan": 2020
    },
    {
      "no": 28,
      "email": "ayuretining@student.uns.ac.id",
      "name": "Ayu Retining Rahayu",
      "nim": "I0620012",
      "angkatan": 2020
    },
    {
      "no": 29,
      "email": "bertaniakartika@student.uns.ac.id",
      "name": "Bertania Kartikaning Tiyas Rosari",
      "nim": "I0620013",
      "angkatan": 2020
    },
    {
      "no": 30,
      "email": "nitapcy27@student.uns.ac.id",
      "name": "Brilianita Puspaningtyas Wiibowo",
      "nim": "I0620014",
      "angkatan": 2020
    },
    {
      "no": 31,
      "email": "cantikayuman@student.uns.ac.id",
      "name": "Cantika Yuman Carninditha",
      "nim": "I0620015",
      "angkatan": 2020
    },
    {
      "no": 32,
      "email": "choirun_nisa@student.uns.ac.id",
      "name": "Choirun Nisa Nur Rahmadhani",
      "nim": "I0620017",
      "angkatan": 2020
    },
    {
      "no": 33,
      "email": "cintaap@student.uns.ac.id",
      "name": "Cinta Amaliatuszakiya Putri",
      "nim": "I0620018",
      "angkatan": 2020
    },
    {
      "no": 34,
      "email": "dahliarahma@student.uns.ac.id",
      "name": "Dahlia Rahmawati",
      "nim": "I0620019",
      "angkatan": 2020
    },
    {
      "no": 35,
      "email": "dianaindpr@student.uns.ac.id",
      "name": "Diana Indah Pratiwi",
      "nim": "I0620020",
      "angkatan": 2020
    },
    {
      "no": 36,
      "email": "diandraap@student.uns.ac.id",
      "name": "Diandra Anggita Paramitha",
      "nim": "I0620021",
      "angkatan": 2020
    },
    {
      "no": 37,
      "email": "dinalutfiana28@student.uns.ac.id",
      "name": "Dina Lutfiana Rahma Wati",
      "nim": "I0620022",
      "angkatan": 2020
    },
    {
      "no": 38,
      "email": "rahmawatidini@student.uns.ac.id",
      "name": "Dini Rahmawati Masithoh",
      "nim": "I0620023",
      "angkatan": 2020
    },
    {
      "no": 39,
      "email": "ditosuryo@student.uns.ac.id",
      "name": "Dito Suryo Fitrianto",
      "nim": "I0620024",
      "angkatan": 2020
    },
    {
      "no": 40,
      "email": "dityahapsari@student.uns.ac.id",
      "name": "Ditya Putri Hapsari",
      "nim": "I0620025",
      "angkatan": 2020
    },
    {
      "no": 41,
      "email": "ekarahmasari@student.uns.ac.id",
      "name": "Eka Rahmasari",
      "nim": "I0620027",
      "angkatan": 2020
    },
    {
      "no": 42,
      "email": "elinnasya@student.uns.ac.id",
      "name": "El Innasya Aulidya Putri",
      "nim": "I0620028",
      "angkatan": 2020
    },
    {
      "no": 43,
      "email": "naomielzahenvita@student.uns.ac.id",
      "name": "Elza Henvita Putri",
      "nim": "I0620031",
      "angkatan": 2020
    },
    {
      "no": 44,
      "email": "fadhillanl26@student.uns.ac.id",
      "name": "Fadhilla Nur Laila",
      "nim": "I0620033",
      "angkatan": 2020
    },
    {
      "no": 45,
      "email": "fikakurrahniazzahra@student.uns.ac.id",
      "name": "FikaKurrahni Azzahra",
      "nim": "I0620036",
      "angkatan": 2020
    },
    {
      "no": 46,
      "email": "fitriindrianis@student.uns.ac.id",
      "name": "Fitri Indriani Suroto",
      "nim": "I0620037",
      "angkatan": 2020
    },
    {
      "no": 47,
      "email": "frinkasnr31@student.uns.ac.id",
      "name": "Frinka Salma Nanda Rifiona",
      "nim": "I0620039",
      "angkatan": 2020
    },
    {
      "no": 48,
      "email": "galihnurseto@student.uns.ac.id",
      "name": "Galih Nur Seto",
      "nim": "I0620041",
      "angkatan": 2020
    },
    {
      "no": 49,
      "email": "grafirati@student.uns.ac.id",
      "name": "Grafirati Mutiara Ayuningtias",
      "nim": "I0620042",
      "angkatan": 2020
    },
    {
      "no": 50,
      "email": "irfandra17@student.uns.ac.id",
      "name": "Irfandra Ari Wijaya",
      "nim": "I0620047",
      "angkatan": 2020
    },
    {
      "no": 51,
      "email": "jihanaulia@student.uns.ac.id",
      "name": "Jihan Aulia Noor Hanifah",
      "nim": "I0620050",
      "angkatan": 2020
    },
    {
      "no": 52,
      "email": "juliaawann@student.uns.ac.id",
      "name": "Julia Awan Az Zahra",
      "nim": "I0620051",
      "angkatan": 2020
    },
    {
      "no": 53,
      "email": "marshelynayudha11@student.uns.ac.id",
      "name": "Marshelyna Yudha Arnanda",
      "nim": "I0620053",
      "angkatan": 2020
    },
    {
      "no": 54,
      "email": "meisyariluthfia@student.uns.ac.id",
      "name": "Meisyari Luthfia",
      "nim": "I0620054",
      "angkatan": 2020
    },
    {
      "no": 55,
      "email": "michelinerychl@student.uns.ac.id",
      "name": "Micheline Raychel Tangon",
      "nim": "I0620055",
      "angkatan": 2020
    },
    {
      "no": 56,
      "email": "ihsyanugrah@student.uns.ac.id",
      "name": "Muhammad Ihsya Anugrah Pratama",
      "nim": "I0620058",
      "angkatan": 2020
    },
    {
      "no": 57,
      "email": "priscilanila@student.uns.ac.id",
      "name": "Priscila Nila Narwastuti",
      "nim": "I0620060",
      "angkatan": 2020
    },
    {
      "no": 58,
      "email": "rachmawulan07@student.uns.ac.id",
      "name": "Rachma Wulan Dwi Yulianti",
      "nim": "I0620062",
      "angkatan": 2020
    },
    {
      "no": 59,
      "email": "Radhiptairsyad@student.uns.ac.id",
      "name": "Radhipta Irsyad Luqmana",
      "nim": "I0620063",
      "angkatan": 2020
    },
    {
      "no": 60,
      "email": "rafifaswidar12@student.uns.ac.id",
      "name": "Rafif Aswidar Samudra",
      "nim": "I0620064",
      "angkatan": 2020
    },
    {
      "no": 61,
      "email": "rahmanovitasari21@student.uns.ac.id",
      "name": "Rahma Novita Sari",
      "nim": "I0620065",
      "angkatan": 2020
    },
    {
      "no": 62,
      "email": "rifdaasyifah@student.uns.ac.id",
      "name": "Rifda Asyifah Syandana",
      "nim": "I0620068",
      "angkatan": 2020
    },
    {
      "no": 63,
      "email": "sabrinapurba@student.uns.ac.id",
      "name": "Sabrina Purba",
      "nim": "I0620071",
      "angkatan": 2020
    },
    {
      "no": 64,
      "email": "salim.aziz1610@student.uns.ac.id",
      "name": "Salim Aziz",
      "nim": "I0620072",
      "angkatan": 2020
    },
    {
      "no": 65,
      "email": "selynaberliant@student.uns.ac.id",
      "name": "Selyna Aisya Berlianty",
      "nim": "I0620074",
      "angkatan": 2020
    },
    {
      "no": 66,
      "email": "sevinaprtw892@student.uns.ac.id",
      "name": "Sevina Eka Pratiwi",
      "nim": "I0620075",
      "angkatan": 2020
    },
    {
      "no": 67,
      "email": "shafazaiz@student.uns.ac.id",
      "name": "Shafa Zaizafun Azzakiyya",
      "nim": "I0620076",
      "angkatan": 2020
    },
    {
      "no": 68,
      "email": "oktaviadevi@student.uns.ac.id",
      "name": "Siti Devi Oktavia",
      "nim": "I0620078",
      "angkatan": 2020
    },
    {
      "no": 69,
      "email": "syifamaulidya@student.uns.ac.id",
      "name": "Syifa Maulidya",
      "nim": "I0620079",
      "angkatan": 2020
    },
    {
      "no": 70,
      "email": "wahyuwidhiprawesti14@student.uns.ac.id",
      "name": "Wahyu Widhi Prawesti",
      "nim": "I0620082",
      "angkatan": 2020
    },
    {
      "no": 71,
      "email": "aidarossalina@student.uns.ac.id",
      "name": "Aida Rossalina Khoirunnisa",
      "nim": "I0620083",
      "angkatan": 2020
    },
    {
      "no": 72,
      "email": "ryoalfanto@student.uns.ac.id",
      "name": "Alfanto Kurneryo Isanjaya",
      "nim": "I0620084",
      "angkatan": 2020
    },
    {
      "no": 73,
      "email": "ronaldofilipe2001@student.uns.ac.id",
      "name": "Ronaldo C. L. Filipe",
      "nim": "I0620087",
      "angkatan": 2020
    },
    {
      "no": 74,
      "email": "Basyith8@student.uns.ac.id",
      "name": "Muhamed basyith agung",
      "nim": "I0620089",
      "angkatan": 2020
    },
  ]

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
