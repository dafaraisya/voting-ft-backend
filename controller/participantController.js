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
      "email": "ibnusinaabbas7@student.uns.ac.id",
      "name": "Muhammad Ibnu Sina Abbas Parlin",
      "nim": "I0718024",
      "angkatan": 2018
    },
    {
      "no": 2,
      "email": "adrielnugroho@student.uns.ac.id",
      "name": "Adriel Satrio Nugroho",
      "nim": "I0719004",
      "angkatan": 2019
    },
    {
      "no": 3,
      "email": "ajighanang@student.uns.ac.id",
      "name": "Aji Ghanang Amurwabhumi",
      "nim": "I0719006",
      "angkatan": 2019
    },
    {
      "no": 4,
      "email": "akbarharmawan70@student.uns.ac.id",
      "name": "Akbar Dharmawan",
      "nim": "I0719007",
      "angkatan": 2019
    },
    {
      "no": 5,
      "email": "aliekatma@student.uns.ac.id",
      "name": "Ali Ekatma Rendra",
      "nim": "I0719010",
      "angkatan": 2019
    },
    {
      "no": 6,
      "email": "as_adsyahrul.32@student.uns.ac.id",
      "name": "As'ad Syahrul Munir",
      "nim": "I0719015",
      "angkatan": 2019
    },
    {
      "no": 7,
      "email": "aziz.surya.3012@student.uns.ac.id",
      "name": "Azis Surya Ananda",
      "nim": "I0719017",
      "angkatan": 2019
    },
    {
      "no": 8,
      "email": "daffa.am99@student.uns.ac.id",
      "name": "Daffa Aminuddin",
      "nim": "I0719019",
      "angkatan": 2019
    },
    {
      "no": 9,
      "email": "damarisadiwaskitho2002@student.uns.ac.id",
      "name": "Damaris Adi Waskitho",
      "nim": "I0719020",
      "angkatan": 2019
    },
    {
      "no": 10,
      "email": "dinamifikas@student.uns.ac.id",
      "name": "Dina Mifika Sari",
      "nim": "I0719022",
      "angkatan": 2019
    },
    {
      "no": 11,
      "email": "fiqihaiqal@student.uns.ac.id",
      "name": "Fiqi Haiqal",
      "nim": "I0719026",
      "angkatan": 2019
    },
    {
      "no": 12,
      "email": "hilwan1412@student.uns.ac.id",
      "name": "Hilwan Hafidzsyah",
      "nim": "I0719033",
      "angkatan": 2019
    },
    {
      "no": 13,
      "email": "ibnu.qoyim86@student.uns.ac.id",
      "name": "Ibnu Qoyim Al-Hafidzh",
      "nim": "I0719034",
      "angkatan": 2019
    },
    {
      "no": 14,
      "email": "Jihansalsabila556@student.uns.ac.id",
      "name": "Jihan salsabila",
      "nim": "I0719036",
      "angkatan": 2019
    },
    {
      "no": 15,
      "email": "luqmanhadi07@student.uns.ac.id",
      "name": "Luqman Hadi Dwi Satryo",
      "nim": "I0719038",
      "angkatan": 2019
    },
    {
      "no": 16,
      "email": "maaf2889@student.uns.ac.id",
      "name": "Maulana Afif",
      "nim": "I0719041",
      "angkatan": 2019
    },
    {
      "no": 17,
      "email": "fakhruddin.ariz@student.uns.ac.id",
      "name": "Muhammad Ariz Fakhruddin",
      "nim": "I0719045",
      "angkatan": 2019
    },
    {
      "no": 18,
      "email": "muhfikria@student.uns.ac.id",
      "name": "Muhammad Fikri Arifudin",
      "nim": "I0719047",
      "angkatan": 2019
    },
    {
      "no": 19,
      "email": "harishumaidi@student.uns.ac.id",
      "name": "Muhammad Haris Humaidi",
      "nim": "I0719048",
      "angkatan": 2019
    },
    {
      "no": 20,
      "email": "rafliepangestuuu@student.uns.ac.id",
      "name": "Muhammad Raflie Pangestu",
      "nim": "I0719050",
      "angkatan": 2019
    },
    {
      "no": 21,
      "email": "alfa.tih@student.uns.ac.id",
      "name": "Muhammad Wildan Alfatih",
      "nim": "I0719053",
      "angkatan": 2019
    },
    {
      "no": 22,
      "email": "salsabilaanandaa@student.uns.ac.id",
      "name": "Salsabila Ananda Putri",
      "nim": "I0719067",
      "angkatan": 2019
    },
    {
      "no": 23,
      "email": "adhitrajaf41@student.uns.ac.id",
      "name": "Adhitya Fajar Rachmadi",
      "nim": "I0720001",
      "angkatan": 2020
    },
    {
      "no": 24,
      "email": "anas.hibat99@student.uns.ac.id",
      "name": "Anas Hibatullah Djoko Susilo",
      "nim": "I0720002",
      "angkatan": 2020
    },
    {
      "no": 25,
      "email": "mayyahsor@student.uns.ac.id",
      "name": "Anna Mayyah Soraya",
      "nim": "I0720003",
      "angkatan": 2020
    },
    {
      "no": 26,
      "email": "antoniuskukuh4@student.uns.ac.id",
      "name": "Antonius Kukuh Prasetyaji",
      "nim": "I0720004",
      "angkatan": 2020
    },
    {
      "no": 27,
      "email": "asriaziziyah@student.uns.ac.id",
      "name": "Asri Aziziyah",
      "nim": "I0720006",
      "angkatan": 2020
    },
    {
      "no": 28,
      "email": "aulia.rahmatw19@student.uns.ac.id",
      "name": "Aulia Rahmat Tsani Wibisono",
      "nim": "I0720007",
      "angkatan": 2020
    },
    {
      "no": 29,
      "email": "ayatullahshiddiq@student.uns.ac.id",
      "name": "Ayatullah Shiddiq",
      "nim": "I0720009",
      "angkatan": 2020
    },
    {
      "no": 30,
      "email": "firdausazalia@student.uns.ac.id",
      "name": "Azalia Ananta Firdaus",
      "nim": "I0720010",
      "angkatan": 2020
    },
    {
      "no": 31,
      "email": "bagassetiawan@student.uns.ac.id",
      "name": "Bagas Setiawan",
      "nim": "I0720011",
      "angkatan": 2020
    },
    {
      "no": 32,
      "email": "bagusputran6@student.uns.ac.id",
      "name": "Bagus Putra Nugraha",
      "nim": "I0720012",
      "angkatan": 2020
    },
    {
      "no": 33,
      "email": "diassaputra@student.uns.ac.id",
      "name": "Baharuddin Dias Saputra",
      "nim": "I0720013",
      "angkatan": 2020
    },
    {
      "no": 34,
      "email": "bimaekanto@student.uns.ac.id",
      "name": "Bima Ekanto Putra",
      "nim": "I0720014",
      "angkatan": 2020
    },
    {
      "no": 35,
      "email": "ramadhanbintang94@student.uns.ac.id",
      "name": "Bintang Ramadhan",
      "nim": "I0720015",
      "angkatan": 2020
    },
    {
      "no": 36,
      "email": "dian.eka0402@student.uns.ac.id",
      "name": "Dian Eka Febriyanti Adz Zahra",
      "nim": "I0720019",
      "angkatan": 2020
    },
    {
      "no": 37,
      "email": "enggar.nc.4@student.uns.ac.id",
      "name": "Enggar Nurcahyo",
      "nim": "I0720020",
      "angkatan": 2020
    },
    {
      "no": 38,
      "email": "fauzanwakhid83@student.uns.ac.id",
      "name": "Fauzan Wakhid Mukhtarom",
      "nim": "I0720021",
      "angkatan": 2020
    },
    {
      "no": 39,
      "email": "indrawanferry30@student.uns.ac.id",
      "name": "Ferry Indrawan",
      "nim": "I0720023",
      "angkatan": 2020
    },
    {
      "no": 40,
      "email": "fikrisayfudin29@student.uns.ac.id",
      "name": "Fikri Saefudin",
      "nim": "I0720024",
      "angkatan": 2020
    },
    {
      "no": 41,
      "email": "ilhamariswa8274@student.uns.ac.id",
      "name": "Ilham Ariswanto",
      "nim": "I0720027",
      "angkatan": 2020
    },
    {
      "no": 42,
      "email": "immanuel.satrio@student.uns.ac.id",
      "name": "Immanuel Satrio Putro Sulistyoaji",
      "nim": "I0720029",
      "angkatan": 2020
    },
    {
      "no": 43,
      "email": "irfanmahardika02@student.uns.ac.id",
      "name": "Irfan Mahardika",
      "nim": "I0720030",
      "angkatan": 2020
    },
    {
      "no": 44,
      "email": "isnandarup@student.uns.ac.id",
      "name": "Isnandaru Prasetyo",
      "nim": "I0720031",
      "angkatan": 2020
    },
    {
      "no": 45,
      "email": "ivanderryuns.20@student.uns.ac.id",
      "name": "Ivan Derry",
      "nim": "I0720032",
      "angkatan": 2020
    },
    {
      "no": 46,
      "email": "jesslynzaneta@student.uns.ac.id",
      "name": "Jesslyn Zaneta",
      "nim": "I0720033",
      "angkatan": 2020
    },
    {
      "no": 47,
      "email": "kaleb.nathan@student.uns.ac.id",
      "name": "Kaleb Nathan Zebua",
      "nim": "I0720034",
      "angkatan": 2020
    },
    {
      "no": 48,
      "email": "mahendranugroho73@student.uns.ac.id",
      "name": "Mahendra Adi Nugroho",
      "nim": "I0720035",
      "angkatan": 2020
    },
    {
      "no": 49,
      "email": "marioalfandi@student.uns.ac.id",
      "name": "Mario Alfandi Wirawan",
      "nim": "I0720037",
      "angkatan": 2020
    },
    {
      "no": 50,
      "email": "adzkiafaiz@student.uns.ac.id",
      "name": "Muhamad Faiz Adzkia",
      "nim": "I0720038",
      "angkatan": 2020
    },
    {
      "no": 51,
      "email": "isyarizkyfauzan@student.uns.ac.id",
      "name": "Muhamad Isya Rizky Fauzan",
      "nim": "I0720039",
      "angkatan": 2020
    },
    {
      "no": 52,
      "email": "rafiyatna3105@student.uns.ac.id",
      "name": "Muhamad Sandya Rafiyatna",
      "nim": "I0720040",
      "angkatan": 2020
    },
    {
      "no": 53,
      "email": "Affanhibatullah2302@student.uns.ac.id",
      "name": "Muhammad Affan Hibatullah Harsito",
      "nim": "I0720041",
      "angkatan": 2020
    },
    {
      "no": 54,
      "email": "mfiqih.alfaishal@student.uns.ac.id",
      "name": "MUHAMMAD FIQIH AL FAISHAL",
      "nim": "I0720044",
      "angkatan": 2020
    },
    {
      "no": 55,
      "email": "gunturalamsyah@student.uns.ac.id",
      "name": "Muhammad Guntur Alamsyah",
      "nim": "I0720045",
      "angkatan": 2020
    },
    {
      "no": 56,
      "email": "hammamchoi23@student.uns.ac.id",
      "name": "Hammam Choiri",
      "nim": "I0720046",
      "angkatan": 2020
    },
    {
      "no": 57,
      "email": "m.iksanbima112@student.uns.ac.id",
      "name": "Muhammad Iksan Bima Aria Pratama",
      "nim": "I0720048",
      "angkatan": 2020
    },
    {
      "no": 58,
      "email": "mnhidayat96@student.uns.ac.id",
      "name": "Muhammad Nur Hidayat",
      "nim": "I0720049",
      "angkatan": 2020
    },
    {
      "no": 59,
      "email": "muhammadshiddiq@student.uns.ac.id",
      "name": "Muhammad Shiddiq",
      "nim": "I0720050",
      "angkatan": 2020
    },
    {
      "no": 60,
      "email": "yusufzaimal96@student.uns.ac.id",
      "name": "Mihammad Yusuf Za'imal Khunafai",
      "nim": "I0720051",
      "angkatan": 2020
    },
    {
      "no": 61,
      "email": "naufalqolbu@student.uns.ac.id",
      "name": "Naufal Qolbu Majid",
      "nim": "I0720054",
      "angkatan": 2020
    },
    {
      "no": 62,
      "email": "nofaarsyadana@student.uns.ac.id",
      "name": "Nofa Arsyadana SS",
      "nim": "I0720055",
      "angkatan": 2020
    },
    {
      "no": 63,
      "email": "Priastomo@student.uns.ac.id",
      "name": "Priastomo Indra B",
      "nim": "I0720057",
      "angkatan": 2020
    },
    {
      "no": 64,
      "email": "rafliarmantya@student.uns.ac.id",
      "name": "Rafli Sholheqin Armantya Putra",
      "nim": "I0720059",
      "angkatan": 2020
    },
    {
      "no": 65,
      "email": "rakhlidian@student.uns.ac.id",
      "name": "Rakhli Dian Pramudyo",
      "nim": "I0720061",
      "angkatan": 2020
    },
    {
      "no": 66,
      "email": "raymonds@student.uns.ac.id",
      "name": "Raymond Subianto",
      "nim": "I0720063",
      "angkatan": 2020
    },
    {
      "no": 67,
      "email": "revasetiabudi13@student.uns.ac.id",
      "name": "Reva Setiabudi",
      "nim": "I0720064",
      "angkatan": 2020
    },
    {
      "no": 68,
      "email": "ridhopriambodo@student.uns.ac.id",
      "name": "Ridho Priambodo",
      "nim": "I0720065",
      "angkatan": 2020
    },
    {
      "no": 69,
      "email": "theoaditya63@student.uns.ac.id",
      "name": "Theodore Aditya Putranto",
      "nim": "I0720070",
      "angkatan": 2020
    },
    {
      "no": 70,
      "email": "umarahzamy27@student.uns.ac.id",
      "name": "Umar Ahzamy Ashhabul Kahfi",
      "nim": "I0720072",
      "angkatan": 2020
    },
    {
      "no": 71,
      "email": "zahrafadillae@student.uns.ac.id",
      "name": "Zahra Fadilla Ekasuci",
      "nim": "I0720075",
      "angkatan": 2020
    },
    {
      "no": 72,
      "email": "syahrul.hasan.21@student.uns.ac.id",
      "name": "Ahmad Syahrul Hasan",
      "nim": "I0720076",
      "angkatan": 2020
    },
    {
      "no": 73,
      "email": "yudistira28@student.uns.ac.id",
      "name": "Ahmad yudistira",
      "nim": "I0720077",
      "angkatan": 2020
    },
    {
      "no": 74,
      "email": "ammaralim47@student.uns.ac.id",
      "name": "Ammar Alim Musthofa",
      "nim": "I0720079",
      "angkatan": 2020
    },
    {
      "no": 75,
      "email": "izzanghaus87@student.uns.ac.id",
      "name": "Hasyim Izzan Ghaus",
      "nim": "I0720080",
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
