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
      "email": "hr.mufid@student.uns.ac.id",
      "name": "Mufid Habiburrahman",
      "nim": "I0116074"
    },
    {
      "email": "ivanderimmanuel@student.uns.ac.id",
      "name": "Ivander Immanuel",
      "nim": "I0117070"
    },
    {
      "email": "jauharulkafi@student.uns.ac.id",
      "name": "Jauharul Kafi",
      "nim": "I0117071"
    },
    {
      "email": "afifburhanthahir369@student.uns.ac.id",
      "name": "Afief Burhany Thahir",
      "nim": "I0118007"
    },
    {
      "email": "aribudi321@student.uns.ac.id",
      "name": "Ari Budidarmawan Waskita Pratama",
      "nim": "I0118026"
    },
    {
      "email": "marthalenapr@student.uns.ac.id",
      "name": "MARTHALENA POETRA RYSHALDO",
      "nim": "I0118085"
    },
    {
      "email": "daffaaulia67@student.uns.ac.id",
      "name": "Muhammad Daffa Auliarahman",
      "nim": "I0118093"
    },
    {
      "email": "nabilayusi@student.uns.ac.id",
      "name": "Nabila Yusriyya Huwaida",
      "nim": "I0118108"
    },
    {
      "email": "nathaliedewi27@student.uns.ac.id",
      "name": "Nathalie Dewi Puspitasari",
      "nim": "I0118112"
    },
    {
      "email": "zein@student.uns.ac.id",
      "name": "Zein Siddiq Rikiaifuni",
      "nim": "I0118148"
    },
    {
      "email": "Ahyakw@student.uns.ac.id",
      "name": "Ahya Khairunissa Wibowo",
      "nim": "I0119013"
    },
    {
      "email": "ainunnadhir241@student.uns.ac.id",
      "name": "Ainun Nadhir Mudrikah",
      "nim": "I0119014"
    },
    {
      "email": "alayyamazaya@student.uns.ac.id",
      "name": "Alayya Mazaya",
      "nim": "I0119018"
    },
    {
      "email": "anggitapratiwi@student.uns.ac.id",
      "name": "Anggita Pratiwi",
      "nim": "I0119029"
    },
    {
      "email": "arifrohadiyanto04@student.uns.ac.id",
      "name": "Arief Rohadiyanto",
      "nim": "I0119035"
    },
    {
      "email": "mas_izam.2001@student.uns.ac.id",
      "name": "Ariz Amanullah",
      "nim": "I0119037"
    },
    {
      "email": "bayu_desela@student.uns.ac.id",
      "name": "Bayu Desela Arsanto",
      "nim": "I0119046"
    },
    {
      "email": "arkanantadaka@student.uns.ac.id",
      "name": "Daka Arkananta Kastara",
      "nim": "I0119051"
    },
    {
      "email": "elangrahma23@student.uns.ac.id",
      "name": "Elang Rahma Palawa'ae",
      "nim": "I0119060"
    },
    {
      "email": "faridadzakiyyah@student.uns.ac.id",
      "name": "Farida Dzakiyyah Puspita Nurhayati",
      "nim": "I0119066"
    },
    {
      "email": "gazalba@student.uns.ac.id",
      "name": "Gazalba Imaduddin Sholeh",
      "nim": "I0119075"
    },
    {
      "email": "ilhamsiwi@student.uns.ac.id",
      "name": "Ilham Siwi Indra Pamungkas",
      "nim": "I0119085"
    },
    {
      "email": "izubagaskara@student.uns.ac.id",
      "name": "Imam Zufar Bagaskara",
      "nim": "I0119086"
    },
    {
      "email": "izzud.ar@student.uns.ac.id",
      "name": "Muhammad Izzuddin A",
      "nim": "I0119117"
    },
    {
      "email": "raflifarhan.n@student.uns.ac.id",
      "name": "Rafli Farhan Naji",
      "nim": "I0119137"
    },
    {
      "email": "raifirdaus2007@student.uns.ac.id",
      "name": "Raisa Athira Firdaus",
      "nim": "I0119140"
    },
    {
      "email": "septianiani46@student.uns.ac.id",
      "name": "Septiani",
      "nim": "I0119155"
    },
    {
      "email": "Silviaa.rohmawatii10@student.uns.ac.id",
      "name": "Silvia Nur Rohmawati",
      "nim": "I0119159"
    },
    {
      "email": "sylvianika.rachmawati@student.uns.ac.id",
      "name": "Sylvianika Rachmawati",
      "nim": "I0119161"
    },
    {
      "email": "teukurafi29@student.uns.ac.id",
      "name": "Teuku Rafi Baihaqi",
      "nim": "I0119163"
    },
    {
      "email": "adityaes.02@student.uns.ac.id",
      "name": "Aditya Eka Setiawan",
      "nim": "I0120004"
    },
    {
      "email": "adityataufik274@student.uns.ac.id",
      "name": "Aditya Taufik Firmansah",
      "nim": "I0120006"
    },
    {
      "email": "tikanoadityo@student.uns.ac.id",
      "name": "Adityo Tikano",
      "nim": "I0120007"
    },
    {
      "email": "affandyhandoko@student.uns.ac.id",
      "name": "Affandy",
      "nim": "I0120008"
    },
    {
      "email": "ahadinbanu@student.uns.ac.id",
      "name": "Ahadin Banu Muflih",
      "nim": "I0120011"
    },
    {
      "email": "dinansya@student.uns.ac.id",
      "name": "Ahda Dinansya Trisnawan Putra",
      "nim": "I0120012"
    },
    {
      "email": "ahmadfahrudin@student.uns.ac.id",
      "name": "Ahmad Fahrudin",
      "nim": "I0120013"
    },
    {
      "email": "ahmadkurniawan2803@student.uns.ac.id",
      "name": "Ahmad Kurniawan Siregar",
      "nim": "I0120014"
    },
    {
      "email": "anggitolambdar@student.uns.ac.id",
      "name": "Anggito Lambda Raihan",
      "nim": "I0120015"
    },
    {
      "email": "anitasaraswati@student.uns.ac.id",
      "name": "Anita Saraswati",
      "nim": "I0120016"
    },
    {
      "email": "ardaardi04@student.uns.ac.id",
      "name": "Arda Arditama",
      "nim": "I0120017"
    },
    {
      "email": "ardymas33@student.uns.ac.id",
      "name": "Ardymas Febrian Saputra",
      "nim": "I0120018"
    },
    {
      "email": "dutaarbam@student.uns.ac.id",
      "name": "ARYA ANDHIKA DUTA",
      "nim": "I0120019"
    },
    {
      "email": "taqiuddinaslam14@student.uns.ac.id",
      "name": "Aslam Taqiuddin",
      "nim": "I0120020"
    },
    {
      "email": "aufahanif25@student.uns.ac.id",
      "name": "Aufa Hanif Abiyyu Sulthon",
      "nim": "I0120021"
    },
    {
      "email": "azizyudha01@student.uns.ac.id",
      "name": "Aziz Yudha Aulia",
      "nim": "I0120022"
    },
    {
      "email": "bastianarya1248@student.uns.ac.id",
      "name": "Bastian Arya Wijanarko",
      "nim": "I0120026"
    },
    {
      "email": "bayuadinugroho107@student.uns.ac.id",
      "name": "Bayu Adi Nugroho",
      "nim": "I0120027"
    },
    {
      "email": "bismarafi87@student.uns.ac.id",
      "name": "Bisma Raafi Muhammad Dewantara",
      "nim": "I0120030"
    },
    {
      "email": "brilianlucky@student.uns.ac.id",
      "name": "Brilian Lucky Fauzan",
      "nim": "I0120031"
    },
    {
      "email": "bryantchrisnavivarel@student.uns.ac.id",
      "name": "Bryant Chrisna Vivarel",
      "nim": "I0120033"
    },
    {
      "email": "Nisa_tita.amanda@student.uns.ac.id",
      "name": "Chaerunnisa Tita Amanda",
      "nim": "I0120034"
    },
    {
      "email": "daffa26hilmi@student.uns.ac.id",
      "name": "Daffa Hilmi Fauzan",
      "nim": "I0120035"
    },
    {
      "email": "darymalik464@student.uns.ac.id",
      "name": "Dary Malik",
      "nim": "I0120036"
    },
    {
      "email": "dayupuspaindirwati@student.uns.ac.id",
      "name": "Dayu Puspa Indirwati",
      "nim": "I0120037"
    },
    {
      "email": "delimarahmawati@student.uns.ac.id",
      "name": "Delima Rahmawati",
      "nim": "I0120038"
    },
    {
      "email": "devitaputri@student.uns.ac.id",
      "name": "Devita Putri Maharani",
      "nim": "I0120039"
    },
    {
      "email": "Dhimastaruna38@student.uns.ac.id",
      "name": "Dhimas widya taruna wijaya",
      "nim": "I0120040"
    },
    {
      "email": "dianfredlinaakbar@student.uns.ac.id",
      "name": "Dian Fredlina Akbar",
      "nim": "I0120042"
    },
    {
      "email": "dianramadhan30@student.uns.ac.id",
      "name": "Dian Ramadhan Yuwono",
      "nim": "I0120043"
    },
    {
      "email": "diffadefftiara@student.uns.ac.id",
      "name": "Diffa Deff Tiara Pricilia",
      "nim": "I0120045"
    },
    {
      "email": "dionfav12@student.uns.ac.id",
      "name": "Dionisius Pramudita Nandiwardhana",
      "nim": "I0120046"
    },
    {
      "email": "ratih444@student.uns.ac.id",
      "name": "Dyah Ratih Kusumastuti",
      "nim": "I0120047"
    },
    {
      "email": "fadlullohrifki@student.uns.ac.id",
      "name": "Fadlulloh Rifki Muhammad",
      "nim": "I0120050"
    },
    {
      "email": "fahmiefem12@student.uns.ac.id",
      "name": "Fahmi Firman Maulana",
      "nim": "I0120051"
    },
    {
      "email": "faisal.anandra@student.uns.ac.id",
      "name": "Faizal Anandra Dharmawan",
      "nim": "I0120052"
    },
    {
      "email": "farhan090901@student.uns.ac.id",
      "name": "Farhan Nuraziz",
      "nim": "I0120053"
    },
    {
      "email": "fauzykurnain02@student.uns.ac.id",
      "name": "Fauzy Kurnain",
      "nim": "I0120055"
    },
    {
      "email": "fazrulfauzan_m@student.uns.ac.id",
      "name": "Fazrul Fauzan Munadi",
      "nim": "I0120057"
    },
    {
      "email": "fianyusuf777@student.uns.ac.id",
      "name": "Fian Maulana Yusuf Setiawan",
      "nim": "I0120059"
    },
    {
      "email": "firdaus_nurfuadi1@student.uns.ac.id",
      "name": "Firdaus Nurfuadi",
      "nim": "I0120060"
    },
    {
      "email": "gibranal.munawar27@student.uns.ac.id",
      "name": "Gibran Al Munawar",
      "nim": "I0120066"
    },
    {
      "email": "bib.bas17@student.uns.ac.id",
      "name": "Habib Bayu Aris Saputro",
      "nim": "I0120068"
    },
    {
      "email": "hfdmadhiatma@student.uns.ac.id",
      "name": "Hafid Musthafa Adhiatma",
      "nim": "I0120069"
    },
    {
      "email": "hanifrahmat@student.uns.ac.id",
      "name": "Hanif Rahmat Ihsannudin",
      "nim": "I0120072"
    },
    {
      "email": "harviel2001@student.uns.ac.id",
      "name": "Harviel Adzan Megantyaka",
      "nim": "I0120073"
    },
    {
      "email": "hendrawandanu8@student.uns.ac.id",
      "name": "Hendrawan Danu Prihanto",
      "nim": "I0120074"
    },
    {
      "email": "hendysugiharto@student.uns.ac.id",
      "name": "Hendy Sugiharto",
      "nim": "I0120075"
    },
    {
      "email": "herdinadwierawati29@student.uns.ac.id",
      "name": "Herdina Dwi Erawati",
      "nim": "I0120076"
    },
    {
      "email": "ilyas2611@student.uns.ac.id",
      "name": "Ilyas Gilang Ramadhan",
      "nim": "I0120077"
    },
    {
      "email": "inashasnamuthiah@student.uns.ac.id",
      "name": "Inas Hasna Muthiah",
      "nim": "I0120078"
    },
    {
      "email": "indrafir2000@student.uns.ac.id",
      "name": "Indra Firmansyah",
      "nim": "I0120079"
    },
    {
      "email": "Ismanurulfaa@student.uns.ac.id",
      "name": "Isma Nurul Fadhilah",
      "nim": "I0120081"
    },
    {
      "email": "ivaaura1@student.uns.ac.id",
      "name": "Iva Aura Apriliana Wibowo",
      "nim": "I0120082"
    },
    {
      "email": "ivandwihermawan@student.uns.ac.id",
      "name": "Ivan Dwi Hermawan",
      "nim": "I0120083"
    },
    {
      "email": "jhonsimanjuntak@student.uns.ac.id",
      "name": "Jhon Jonathan Simanjuntak",
      "nim": "I0120085"
    },
    {
      "email": "justiantrisna@student.uns.ac.id",
      "name": "Justian Trisna Nugraha",
      "nim": "I0120087"
    },
    {
      "email": "kristianharrisp@student.uns.ac.id",
      "name": "Kristian Harris",
      "nim": "I0120089"
    },
    {
      "email": "kristo@student.uns.ac.id",
      "name": "Kristoforus Anggun Wibowo",
      "nim": "I0120090"
    },
    {
      "email": "adwitya.laili@student.uns.ac.id",
      "name": "Larissa Adwitya Laili",
      "nim": "I0120091"
    },
    {
      "email": "rayhan.bagus29@student.uns.ac.id",
      "name": "M Rayhan Nauval Hidayat",
      "nim": "I0120092"
    },
    {
      "email": "mhmahendra39@student.uns.ac.id",
      "name": "M.H. Mahendra Virendra Khrisna",
      "nim": "I0120093"
    },
    {
      "email": "maritaputri@student.uns.ac.id",
      "name": "Marita Putri Handayani",
      "nim": "I0120094"
    },
    {
      "email": "masdiharakbar@student.uns.ac.id",
      "name": "Masdihar Akbar",
      "nim": "I0120095"
    },
    {
      "email": "michaelprilas@student.uns.ac.id",
      "name": "Michael Prilas Simanjuntak",
      "nim": "I0120096"
    },
    {
      "email": "miseladwi123@student.uns.ac.id",
      "name": "Misela Dwi Arsana",
      "nim": "I0120099"
    },
    {
      "email": "sahrulriski5780@student.uns.ac.id",
      "name": "Mohammad Sahrul Rizki",
      "nim": "I0120100"
    },
    {
      "email": "hanifmadany122@student.uns.ac.id",
      "name": "Muhamad Hanif Madany",
      "nim": "I0120102"
    },
    {
      "email": "raflimuhamad@student.uns.ac.id",
      "name": "Muhamad Rafli",
      "nim": "I0120104"
    },
    {
      "email": "muh.arjunov@student.uns.ac.id",
      "name": "Muhammad Arjunov Ramadhan Genta Buana",
      "nim": "I0120105"
    },
    {
      "email": "muhammad_azizkomar23@student.uns.ac.id",
      "name": "Muhammad Aziz komarudin",
      "nim": "I0120106"
    },
    {
      "email": "m.fahrif21@student.uns.ac.id",
      "name": "Muhammad Fahri Faqihhuddin",
      "nim": "I0120107"
    },
    {
      "email": "hawarilhaq50@student.uns.ac.id",
      "name": "Muhammad Hawaril Haq",
      "nim": "I0120108"
    },
    {
      "email": "hayyumuhammad7@student.uns.ac.id",
      "name": "Muhammad Hayyu 'Alam",
      "nim": "I0120109"
    },
    {
      "email": "luthfiadnan@student.uns.ac.id",
      "name": "Muhammad Luthfi Adnan Al-Fauzi",
      "nim": "I0120111"
    },
    {
      "email": "muhammadnafis1482@student.uns.ac.id",
      "name": "Muhammad Nafis Hafizhan Gandang",
      "nim": "I0120112"
    },
    {
      "email": "naufal@student.uns.ac.id",
      "name": "Muhammad Naufal Ramadhan",
      "nim": "I0120113"
    },
    {
      "email": "puguhkamaludin@student.uns.ac.id",
      "name": "Muhammad Puguh Kamaludin",
      "nim": "I0120114"
    },
    {
      "email": "rayyan.alfirdaus@student.uns.ac.id",
      "name": "Muhammad Rayyan Alfirdaus",
      "nim": "I0120115"
    },
    {
      "email": "muhammadrezanur@student.uns.ac.id",
      "name": "Muhammad Reza Nur Fadlilah",
      "nim": "I0120116"
    },
    {
      "email": "muhammad.wildanm@student.uns.ac.id",
      "name": "Muhammad Wildan Ma'arif",
      "nim": "I0120121"
    },
    {
      "email": "zidanef354@student.uns.ac.id",
      "name": "Muhammad Zidane Faturrohman",
      "nim": "I0120122"
    },
    {
      "email": "mutiarashonata@student.uns.ac.id",
      "name": "Mutiara Shonata",
      "nim": "I0120123"
    },
    {
      "email": "nadirazalfa@student.uns.ac.id",
      "name": "Nadira Zalfa Ulinnuha",
      "nim": "I0120124"
    },
    {
      "email": "najwa@student.uns.ac.id",
      "name": "Najwa",
      "nim": "I0120125"
    },
    {
      "email": "naufalmuzaky2467@student.uns.ac.id",
      "name": "Naufal Akbar Muazaky",
      "nim": "I0120126"
    },
    {
      "email": "nikadeksathya@student.uns.ac.id",
      "name": "Ni Kadek Sathya Ningrum",
      "nim": "I0120128"
    },
    {
      "email": "dwiariyantinia@student.uns.ac.id",
      "name": "Nia Dwi Ariyanti",
      "nim": "I0120129"
    },
    {
      "email": "nikitahosiana@student.uns.ac.id",
      "name": "Nikita Hosiana",
      "nim": "I0120130"
    },
    {
      "email": "fauzan.hafizh030101@student.uns.ac.id",
      "name": "Nur Fauzan Hafizh Arkanuddin",
      "nim": "I0120133"
    },
    {
      "email": "oktavionadwis@student.uns.ac.id",
      "name": "Oktaviona Dwi Setiyanti",
      "nim": "I0120135"
    },
    {
      "email": "quiniathaya@student.uns.ac.id",
      "name": "Quini Athaya Putrii",
      "nim": "I0120137"
    },
    {
      "email": "rafindarahma@student.uns.ac.id",
      "name": "Rafinda Rahma R",
      "nim": "I0120140"
    },
    {
      "email": "raflipriya@student.uns.ac.id",
      "name": "Rafli Priya Pamungkas",
      "nim": "I0120141"
    },
    {
      "email": "raihan.rttan@student.uns.ac.id",
      "name": "RAIHAN TAUFIQURRAHMAN",
      "nim": "I0120142"
    },
    {
      "email": "rainysasanty@student.uns.ac.id",
      "name": "Rainy Sasanti Ramadhiani",
      "nim": "I0120143"
    },
    {
      "email": "andhikareza_2210@student.uns.ac.id",
      "name": "Reza Andhika Putra",
      "nim": "I0120147"
    },
    {
      "email": "Rezamurdani16@student.uns.ac.id",
      "name": "Reza Murdani",
      "nim": "I0120148"
    },
    {
      "email": "kurohazaed@student.uns.ac.id",
      "name": "Reza Salman Faruq",
      "nim": "I0120149"
    },
    {
      "email": "rifkihard01@student.uns.ac.id",
      "name": "Rifki Hardianto",
      "nim": "I0120150"
    },
    {
      "email": "raryaniz@student.uns.ac.id",
      "name": "RIzky Adam Ryaniz",
      "nim": "I0120152"
    },
    {
      "email": "Sahdaaulia1609@student.uns.ac.id",
      "name": "Sahda Aulia",
      "nim": "I0120153"
    },
    {
      "email": "saidhumarb@student.uns.ac.id",
      "name": "Said Humar Basri",
      "nim": "I0120154"
    },
    {
      "email": "fadhillahsarah@student.uns.ac.id",
      "name": "Sarah Nuha Fadhilah",
      "nim": "I0120155"
    },
    {
      "email": "satray050301@student.uns.ac.id",
      "name": "Satrio Rayfathan Ansyaris",
      "nim": "I0120156"
    },
    {
      "email": "sesarioadi@student.uns.ac.id",
      "name": "Sesario Kuncoro Adi",
      "nim": "I0120158"
    },
    {
      "email": "syhras23@student.uns.ac.id",
      "name": "Syah Rela Aulia Sa'ban",
      "nim": "I0120160"
    },
    {
      "email": "dr.syahrul10@student.uns.ac.id",
      "name": "Syahrul Gunawan",
      "nim": "I0120161"
    },
    {
      "email": "Tafidahks@student.uns.ac.id",
      "name": "Tafidah Khairiyyah Saharso",
      "nim": "I0120162"
    },
    {
      "email": "tiradefmicaa@student.uns.ac.id",
      "name": "Tira Defmica Sari",
      "nim": "I0120163"
    },
    {
      "email": "trioktopamungkas578@student.uns.ac.id",
      "name": "Tri Okto Pamungkas",
      "nim": "I0120165"
    },
    {
      "email": "ummi.hdr10@student.uns.ac.id",
      "name": "Ummi Hidayaturrosyidah",
      "nim": "I0120167"
    },
    {
      "email": "vikkosatria7@student.uns.ac.id",
      "name": "Vikko Satria Putra",
      "nim": "I0120169"
    },
    {
      "email": "vincentiusaxel@student.uns.ac.id",
      "name": "Vincentius Axel Herwasto Adi Supomo",
      "nim": "I0120170"
    },
    {
      "email": "vitodecaprio@student.uns.ac.id",
      "name": "Vito De Caprio Matius Hutabalian",
      "nim": "I0120171"
    },
    {
      "email": "zulkarnainnaim@student.uns.ac.id",
      "name": "Wily Zulkarnain Na'im",
      "nim": "I0120173"
    },
    {
      "email": "ahmadrizkizaidan@student.uns.ac.id",
      "name": "Ahmad Rizky Zaidan",
      "nim": "I0120176"
    },
    {
      "email": "aikidowicaksonoo@student.uns.ac.id",
      "name": "Aikido Kartiko Wicaksono",
      "nim": "I0120177"
    },
    {
      "email": "akbarpambudi70@student.uns.ac.id",
      "name": "Akbar Aristyo Pambudi",
      "nim": "I0120178"
    },
    {
      "email": "aldito2404@student.uns.ac.id",
      "name": "Aldito Sadewo Putranto",
      "nim": "I0120179"
    },
    {
      "email": "Anurwikan10@student.uns.ac.id",
      "name": "Anak Anung Anurwikan",
      "nim": "I0120180"
    }
  ]

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.email = _participant.email;
    participant.session.id = "5fd5b4598430463e5853f064";
    participant.session.number = 4;
    participant.session.min = new Date("2020-12-16T14:00:00.000Z");
    participant.session.max = new Date("2020-12-16T20:00:00.000Z");

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
