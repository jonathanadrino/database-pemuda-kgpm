const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { Data, Sidang, User } = require("./models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(cors());

app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;

    if (!username || !password) {
      throw { name: "emptyInput" };
    }

    const user = await User.findOne({ where: { username } });

    if (!user) {
      throw { name: "userNotFound" };
    }

    const verification = bcrypt.compareSync(password, user.password);

    if (!verification) {
      throw { name: "wrongPassword" };
    }

    const token = jwt.sign(user.id, "SECRET");

    console.log(token);
    res.status(200).json({
      access_token: token,
    });
  } catch (err) {
    console.log(err);
    if (err.name === "userNotFound" || err.name === "wrongPassword") {
      res.status(401).json({ message: "Unauthorized" });
    } else if (err.name === "emptyInput") {
      res.status(404).json({ message: "Empty input" });
    }
  }
});

app.get("/data/:id", async (req, res) => {
  try {
    const { id, type } = req.params;
    let data = await Data.findByPk(id, { include: Sidang });

    const ageDifMs = Date.now() - data.birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    data.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (data.age < 35 && data.age > 17) {
      data.status = "Valid";
    } else {
      data.status = "Invalid";
    }

    const newArr = {
      id: data.id,
      name: data.name,
      SidangId: data.SidangId,
      formattedBirthDate: data.birthDate.toLocaleDateString("id-ID", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      birthDate: data.birthDate,
      birthPlace: data.birthPlace,
      age: data.age,
      status: data.status,
      sidang: data.Sidang.name,
    };

    res.status(200).json(newArr);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/data/sidang/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Data.findAll({
      where: {
        SidangId: id,
      },
    });

    for (const e of data) {
      const ageDifMs = Date.now() - e.birthDate.getTime();
      const ageDate = new Date(ageDifMs);
      e.age = Math.abs(ageDate.getUTCFullYear() - 1970);
      if (e.age < 35 && e.age > 17) {
        e.status = "Valid";
      } else {
        e.status = "Invalid";
      }
      console.log(e.name, e.status, e.age);
    }

    const newArr = data.map((e) => {
      return {
        id: e.id,
        name: e.name,
        SidangId: e.SidangId,
        formattedBirthDate: e.birthDate.toLocaleDateString("id-ID", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        birthDate: e.birthDate,
        birthPlace: e.birthPlace,
        age: e.age,
        status: e.status,
      };
    });

    res.status(200).json(newArr);
  } catch (err) {
    console.log(err);
  }
});

app.post("/data", async (req, res) => {
  try {
    const { name, SidangId, birthDate, birthPlace } = req.body;

    console.log(req.body);

    const query = await Data.create({
      name,
      birthDate,
      birthPlace,
      SidangId,
    });

    res.status(201).json({ message: `${name} ditambahkan` });
  } catch (err) {
    console.log(err);
  }
});

app.get("/sidang", async (req, res) => {
  try {
    const data = await Sidang.findAll({
      order: [["name", "ASC"]],
    });

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

app.post("/sidang", async (req, res) => {
  try {
    const { name, cityOrRegency, wilayah } = req.body;

    await Sidang.create({
      name,
      cityOrRegency,
      wilayah: +wilayah,
    });

    res.status(201).json({ message: `Sidang ${name} ditambahkan` });
  } catch (err) {
    console.log(err);
  }
});

app.get("/sidang/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Sidang.findOne({ where: { id } });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

app.put("/sidang", async (req, res) => {
  try {
    console.log("masuk update", "<<<<<<<<<<");
    const { name, cityOrRegency, wilayah, id } = req.body;

    Sidang.update({ name, cityOrRegency, wilayah }, { where: { id } });

    res.status(200).json({
      message: "Berhasil update sidang",
    });
  } catch (err) {
    console.log(err);
  }
});

app.put("/data", async (req, res) => {
  try {
    console.log("masuk update data", "<<<<<<<<<<");
    const { name, SidangId, birthDate, birthPlace, id } = req.body;

    Data.update({ name, SidangId, birthDate, birthPlace }, { where: { id } });

    res.status(200).json({
      message: "Berhasil update data",
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
