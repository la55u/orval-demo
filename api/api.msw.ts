/**
 * Generated by orval v6.9.2 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { rest } from "msw";
import { faker } from "@faker-js/faker";

export const getListPetsMock = () =>
  Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() =>
    faker.helpers.arrayElement([
      {
        cuteness: faker.datatype.number({ min: undefined, max: undefined }),
        breed: faker.helpers.arrayElement(["Labradoodle"]),
        barksPerMinute: faker.helpers.arrayElement([
          faker.datatype.number({ min: undefined, max: undefined }),
          undefined,
        ]),
        type: faker.helpers.arrayElement(["dog"]),
      },
      {
        length: faker.datatype.number({ min: undefined, max: undefined }),
        breed: faker.helpers.arrayElement(["Dachshund"]),
        barksPerMinute: faker.helpers.arrayElement([
          faker.datatype.number({ min: undefined, max: undefined }),
          undefined,
        ]),
        type: faker.helpers.arrayElement(["dog"]),
        "@id": faker.helpers.arrayElement([faker.random.word(), undefined]),
        id: faker.datatype.number({ min: undefined, max: undefined }),
        name: faker.random.word(),
        tag: faker.helpers.arrayElement([faker.random.word(), undefined]),
        email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
        callingCode: faker.helpers.arrayElement([
          faker.helpers.arrayElement(["+33", "+420", "+33"]),
          undefined,
        ]),
        country: faker.helpers.arrayElement([
          faker.helpers.arrayElement(["People's Republic of China", "Uruguay"]),
          undefined,
        ]),
      },
      {
        petsRequested: faker.helpers.arrayElement([
          faker.datatype.number({ min: undefined, max: undefined }),
          undefined,
        ]),
        type: faker.helpers.arrayElement(["cat"]),
        "@id": faker.helpers.arrayElement([faker.random.word(), undefined]),
        id: faker.datatype.number({ min: undefined, max: undefined }),
        name: faker.random.word(),
        tag: faker.helpers.arrayElement([faker.random.word(), undefined]),
        email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
        callingCode: faker.helpers.arrayElement([
          faker.helpers.arrayElement(["+33", "+420", "+33"]),
          undefined,
        ]),
        country: faker.helpers.arrayElement([
          faker.helpers.arrayElement(["People's Republic of China", "Uruguay"]),
          undefined,
        ]),
      },
    ])
  );

export const getCreatePetsMock = () =>
  faker.helpers.arrayElement([
    {
      cuteness: faker.datatype.number({ min: undefined, max: undefined }),
      breed: faker.helpers.arrayElement(["Labradoodle"]),
      barksPerMinute: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(["dog"]),
    },
    {
      length: faker.datatype.number({ min: undefined, max: undefined }),
      breed: faker.helpers.arrayElement(["Dachshund"]),
      barksPerMinute: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(["dog"]),
      "@id": faker.helpers.arrayElement([faker.random.word(), undefined]),
      id: faker.datatype.number({ min: undefined, max: undefined }),
      name: faker.random.word(),
      tag: faker.helpers.arrayElement([faker.random.word(), undefined]),
      email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
      callingCode: faker.helpers.arrayElement([
        faker.helpers.arrayElement(["+33", "+420", "+33"]),
        undefined,
      ]),
      country: faker.helpers.arrayElement([
        faker.helpers.arrayElement(["People's Republic of China", "Uruguay"]),
        undefined,
      ]),
    },
    {
      petsRequested: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(["cat"]),
      "@id": faker.helpers.arrayElement([faker.random.word(), undefined]),
      id: faker.datatype.number({ min: undefined, max: undefined }),
      name: faker.random.word(),
      tag: faker.helpers.arrayElement([faker.random.word(), undefined]),
      email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
      callingCode: faker.helpers.arrayElement([
        faker.helpers.arrayElement(["+33", "+420", "+33"]),
        undefined,
      ]),
      country: faker.helpers.arrayElement([
        faker.helpers.arrayElement(["People's Republic of China", "Uruguay"]),
        undefined,
      ]),
    },
  ]);

export const getShowPetByIdMock = () =>
  faker.helpers.arrayElement([
    {
      cuteness: faker.datatype.number({ min: undefined, max: undefined }),
      breed: faker.helpers.arrayElement(["Labradoodle"]),
      barksPerMinute: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(["dog"]),
    },
    {
      length: faker.datatype.number({ min: undefined, max: undefined }),
      breed: faker.helpers.arrayElement(["Dachshund"]),
      barksPerMinute: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(["dog"]),
      "@id": faker.helpers.arrayElement([faker.random.word(), undefined]),
      id: faker.datatype.number({ min: undefined, max: undefined }),
      name: faker.random.word(),
      tag: faker.helpers.arrayElement([faker.random.word(), undefined]),
      email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
      callingCode: faker.helpers.arrayElement([
        faker.helpers.arrayElement(["+33", "+420", "+33"]),
        undefined,
      ]),
      country: faker.helpers.arrayElement([
        faker.helpers.arrayElement(["People's Republic of China", "Uruguay"]),
        undefined,
      ]),
    },
    {
      petsRequested: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(["cat"]),
      "@id": faker.helpers.arrayElement([faker.random.word(), undefined]),
      id: faker.datatype.number({ min: undefined, max: undefined }),
      name: faker.random.word(),
      tag: faker.helpers.arrayElement([faker.random.word(), undefined]),
      email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
      callingCode: faker.helpers.arrayElement([
        faker.helpers.arrayElement(["+33", "+420", "+33"]),
        undefined,
      ]),
      country: faker.helpers.arrayElement([
        faker.helpers.arrayElement(["People's Republic of China", "Uruguay"]),
        undefined,
      ]),
    },
  ]);

export const getSwaggerPetstoreMSW = () => [
  rest.get("*/pets", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getListPetsMock())
    );
  }),
  rest.post("*/pets", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getCreatePetsMock())
    );
  }),
  rest.get("*/pets/:petId", (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getShowPetByIdMock())
    );
  }),
];
