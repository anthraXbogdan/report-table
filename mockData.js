import { faker } from "@faker-js/faker";

function createData(date, project, task, person, hours) {
  return { date, project, task, person, hours };
}

function generateEmployees() {
  const data = [];

  for (let i = 0; i < 5; i++) {
    data.push(
      createData(
        {
          date: faker.date
            .between("2017-01-01T00:00:00.000Z", "2023-01-01T00:00:00.000Z")
            .toLocaleDateString(),
        },
        {
          project: faker.commerce.productAdjective(),
          description: faker.commerce.productDescription(),
        },
        { task: faker.random.words(5) },
        { person: faker.name.findName(), avatar: faker.image.avatar() },
        { hours: Number.parseInt(faker.random.numeric(4)) }
      )
    );
  }

  return data;
}

export const data = generateEmployees();

export const data2 = [
  createData(
    {
      date: faker.date
        .between("2017-01-01T00:00:00.000Z", "2023-01-01T00:00:00.000Z")
        .toLocaleDateString(),
    },
    {
      project: "Illustration & Branding",
      description:
        "Created wireframe cards and leaderboard for marketing website and do special corrections. ",
    },
    { task: "Style Guide" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 30600 }
  ),
  createData(
    {
      date: faker.date
        .between("2017-01-01T00:00:00.000Z", "2023-01-01T00:00:00.000Z")
        .toString(),
    },
    {
      project: "Style Guide",
      description: "Worked on various print materials and user guide manual.",
    },
    { task: "Style" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 25200 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Dashboard v2",
      description: "Created reports cards and leaderboards.",
    },
    { task: "UI/UX Design" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 19800 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Design Presentation",
      description: "Created a presentation showcasing the new brand direction.",
    },
    { task: "UI/UX Design" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 12600 }
  ),
];

export const data1 = [
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Illustration & Branding",
      description:
        "Created wireframe cards and leaderboard for marketing website and do special corrections. ",
    },
    { task: "Style Guide" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 30600 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "User Guide Manual",
      description: "Worked on various print materials and user guide manual.",
    },
    { task: "Reports" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 25200 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Dashboard v2",
      description: "Created reports cards and leaderboards.",
    },
    { task: "UI/UX Design" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 19800 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Design Presentation",
      description: "Created a presentation showcasing the new brand direction.",
    },
    { task: "Branding Style" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 12600 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Logo and Branding",
      description: "Creating a new logo and branding for Essence",
    },
    { task: "Logo and Illustration" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 43800 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Illustration & Branding",
      description:
        "Created wireframe cards and leaderboard for marketing website.",
    },
    { task: "Style Guide" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 24300 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "User Guide Manual",
      description: "Worked on various print materials and user guide manual.",
    },
    { task: "Reports" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 23160 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Dashboard v2",
      description: "Created reports cards and leaderboards.",
    },
    { task: "UI/UX Design" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 18900 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Design Presentation",
      description: "Created a presentation showcasing the new brand direction.",
    },
    { task: "Branding Style" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 23400 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Logo and Branding",
      description: "Creating a new logo and branding for Essence",
    },
    { task: "Logo and Illustration" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 32700 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Illustration & Branding",
      description:
        "Created wireframe cards and leaderboard for marketing website.",
    },
    { task: "Style Guide" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 32400 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "User Guide Manual",
      description: "Worked on various print materials and user guide manual.",
    },
    { task: "Reports" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 3100 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Dashboard v2",
      description: "Created reports cards and leaderboards.",
    },
    { task: "UI/UX Design" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 17100 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Design Presentation",
      description: "Created a presentation showcasing the new brand direction.",
    },
    { task: "Branding Style" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 15600 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Logo and Branding",
      description: "Creating a new logo and branding for Essence",
    },
    { task: "Logo and Illustration" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 8400 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Illustration & Branding",
      description:
        "Created wireframe cards and leaderboard for marketing website.",
    },
    { task: "Style Guide" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 37200 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "User Guide Manual",
      description: "Worked on various print materials and user guide manual.",
    },
    { task: "Reports" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 26400 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Dashboard v2",
      description: "Created reports cards and leaderboards.",
    },
    { task: "UI/UX Design" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 23600 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Design Presentation",
      description: "Created a presentation showcasing the new brand direction.",
    },
    { task: "Branding Style" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 9000 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Logo and Branding",
      description: "Creating a new logo and branding for Essence",
    },
    { task: "Logo and Illustration" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 10000 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Dashboard v2",
      description: "Created reports cards and leaderboards.",
    },
    { task: "UI/UX Design" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 23600 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Design Presentation",
      description: "Created a presentation showcasing the new brand direction.",
    },
    { task: "Branding Style" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 9000 }
  ),
  createData(
    {
      date: faker.date.between(
        "2017-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
    },
    {
      project: "Logo and Branding",
      description: "Creating a new logo and branding for Essence",
    },
    { task: "Logo and Illustration" },
    { person: faker.name.fullName(), avatar: faker.image.avatar() },
    { hours: 10000 }
  ),
];
