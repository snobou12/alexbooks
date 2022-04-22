
import { createSlice, current } from "@reduxjs/toolkit";

const constructorSlice = createSlice({
  name: "constructor",
  initialState: {
    header_content: {
      step: 3,
      price: 9999,
    },
    size: {
      selectedType: 0,
      scale: 0.75,
      types: [
        {
          id: 0,
          title: "quadratic",
          transl: "Квадратная",
          sizes: [
            { id: 0, size: "15x15 см", price: "2190р" },
            { id: 1, size: "20x20 см", price: "3590р" },
            { id: 2, size: "25x25 см", price: "5490р" },
            { id: 3, size: "30x30 см", price: "6990р" },
          ],
          selectedSize: 0,
        },
        {
          id: 1,
          title: "landscape",
          transl: "Альбомная",
          sizes: [
            { id: 0, size: "15x22,5 см", price: "2490р" },
            { id: 1, size: "20x32 см", price: "5290р" },
            { id: 2, size: "30x40 см", price: "8890р" },
          ],
          selectedSize: 0,
        },
      ],
    },
    cover: {
      selectedType: 0, //0-эко кожа, 1-ткань,2-фотообложка
      types: [
        //Эко кожа
        {
          id: 0,
          title: "ecoLeather",
          transl: "Эко-кожа",
          //main variables
          selectedColor: 6,
          selectedDecor: 0,
          features: {
            colors: [
              { id: 0, title: "blue" },
              { id: 1, title: "lowPurple" },
              { id: 2, title: "sandy" },
              { id: 3, title: "graySilk" },
              { id: 4, title: "gray" },
              { id: 5, title: "purplishGray" },
              { id: 6, title: "pearl" },
              { id: 7, title: "lightGreen" },
            ],
            decor: [
              {
                id: 0,
                title: "lettering",
                transl: "Тиснение",
                options: [
                  {
                    id: 0,
                    title: "colorLettering",
                    transl: "Цвет тиснения",
                    selectedColor: 0,
                    colors: [
                      { id: 0, title: "gold" },
                      { id: 1, title: "silver" },
                      { id: 2, title: "colorless" },
                    ],
                  },
                  {
                    id: 1,
                    title: "design",
                    transl: "Узор",
                    selectedDesign: 5,
                    designs: [
                      {
                        id: 0,
                        title: "heart",
                        position: {
                          x: 235,
                          y: 225,
                          w: 150,
                          h: 150,
                        },
                      },
                      { id: 1, title: "baptism", position: null },
                      { id: 2, title: "cats", position: null },
                      { id: 3, title: "dream", position: null },
                      { id: 4, title: "wood", position: null },
                      {
                        id: 5,
                        title: "ourWeddingDay",
                        position: {
                          x: 192.5,
                          y: 275,
                          w: 250,
                          h: 35,
                        },
                      },
                      {
                        id: 6,
                        title: "family",
                        position: {
                          x: 165.5,
                          y: 250,
                          w: 300,
                          h: 70,
                        },
                      },
                      { id: 7, title: "weddingDay", position: null },
                      { id: 8, title: "buggy", position: null },
                      { id: 9, title: "owl", position: null },
                      { id: 10, title: "helloWorld", position: null },
                      { id: 11, title: "elephant", position: null },
                    ],
                  },
                ],
              },

              {
                id: 1,
                title: "photoBid",
                transl: "Фотовставка",
                selectedSize: 0,
                sizes: [
                  { id: 0, title: "horizontal" },
                  { id: 1, title: "vertical" },
                  { id: 2, title: "quadratic" },
                ],
                blobImage: null,
              },
              {
                id: 2,
                title: "metalPlate",
                transl: "Металлическая пластина",
                options: [
                  {
                    id: 0,
                    title: "plateColor",
                    transl: "Цвет",
                    selectedColor: 0,
                    colors: [
                      { id: 0, title: "gold" },
                      { id: 1, title: "silver" },
                    ],
                  },
                  {
                    id: 1,
                    title: "size",
                    transl: "Форма",
                    selectedSize: 0,
                    sizes: [
                      { id: 0, title: "quadratic" },
                      { id: 1, title: "rectangular" },
                    ],
                  },
                  {
                    id: 2,
                    title: "plateDecoration",
                    transl: "Оформление пластины",
                    selectedDecoration: 0,
                    decors: [
                      {
                        id: 0,
                        title: "engraving",
                        transl: "Гравировка",
                        selectedEngrave: 0,
                        engraves: [
                          { id: 0, title: "justMarried" },
                          { id: 1, title: "happyBirthdayToYou" },
                          { id: 2, title: "iLoveYou" },
                          { id: 3, title: "summer" },
                          { id: 4, title: "weddingDay" },
                          { id: 5, title: "newBaby" },
                          { id: 6, title: "mountains" },
                          { id: 7, title: "happyBirthday" },
                          { id: 8, title: "happyNewYear" },
                          { id: 9, title: "family" },
                          { id: 10, title: "bunny" },
                          { id: 11, title: "ship" },
                          { id: 12, title: "timeToTravel" },
                          { id: 13, title: "love" },
                          { id: 14, title: "happyBirthdaySecond" },
                          { id: 15, title: "airplane" },
                          { id: 16, title: "flight" },
                          { id: 17, title: "tree" },
                        ],
                      },
                      {
                        id: 1,
                        title: "text",
                        transl: "Текст",
                        typedText: "",
                        selectedSize: 0,
                        selectedFont: 0,
                        sizes: [
                          { id: 0, value: "20" },
                          { id: 1, value: "24" },
                          { id: 2, value: "26" },
                          { id: 3, value: "28" },
                          { id: 4, value: "30" },
                          { id: 5, value: "32" },
                          { id: 6, value: "35" },
                        ],
                        fonts: [
                          { id: 0, value: "Elisabethische" },
                          { id: 1, value: "Amatic SC" },
                          { id: 2, value: "SnowCap" },
                          { id: 3, value: "PerspectiveC" },
                          { id: 4, value: "Carefree Cyrillic" },
                          { id: 5, value: "Vivaldi script" },
                        ],
                      },
                    ],
                  },
                ],
              },
              { id: 3, title: "nothing", transl: "Без всего" },
            ],
          },
        },
        //Ткань
        {
          id: 1,
          title: "textile",
          transl: "Ткань",
          selectedColor: 0,
          selectedDecor: 0,
          features: {
            colors: [
              { id: 0, title: "green" },
              { id: 1, title: "blue" },
              { id: 2, title: "beige" },
              { id: 3, title: "red" },
              { id: 4, title: "purple" },
              { id: 5, title: "dark" },
              { id: 6, title: "orange" },
              { id: 7, title: "grey" },
            ],
            decor: [
              {
                id: 0,
                title: "lettering",
                transl: "Тиснение",
                options: [
                  {
                    id: 0,
                    title: "colorLettering",
                    transl: "Цвет тиснения",
                    selectedColor: 0,
                    colors: [{ id: 0, title: "colorless" }],
                  },
                  {
                    id: 1,
                    title: "design",
                    transl: "Узор",
                    selectedDesign: 5,
                    designs: [
                      {
                        id: 0,
                        title: "heart",
                        position: {
                          x: 235,
                          y: 225,
                          w: 150,
                          h: 150,
                        },
                      },
                      { id: 1, title: "baptism", position: null },
                      { id: 2, title: "cats", position: null },
                      { id: 3, title: "dream", position: null },
                      { id: 4, title: "wood", position: null },
                      {
                        id: 5,
                        title: "ourWeddingDay",
                        position: {
                          x: 192.5,
                          y: 275,
                          w: 250,
                          h: 35,
                        },
                      },
                      {
                        id: 6,
                        title: "family",
                        position: {
                          x: 165.5,
                          y: 250,
                          w: 300,
                          h: 70,
                        },
                      },
                      { id: 7, title: "weddingDay", position: null },
                      { id: 8, title: "buggy", position: null },
                      { id: 9, title: "owl", position: null },
                      { id: 10, title: "helloWorld", position: null },
                      { id: 11, title: "elephant", position: null },
                    ],
                  },
                ],
              },

              {
                id: 1,
                title: "photoBid",
                transl: "Фотовставка",
                selectedSize: 0,
                sizes: [
                  { id: 0, title: "horizontal" },
                  { id: 1, title: "vertical" },
                  { id: 2, title: "quadratic" },
                ],
                blobImage: null,
              },
              {
                id: 2,
                title: "metalPlate",
                transl: "Металлическая пластина",
                options: [
                  {
                    id: 0,
                    title: "plateColor",
                    transl: "Цвет",
                    selectedColor: 0,
                    colors: [
                      { id: 0, title: "gold" },
                      { id: 1, title: "silver" },
                    ],
                  },
                  {
                    id: 1,
                    title: "size",
                    transl: "Форма",
                    selectedSize: 0,
                    sizes: [
                      { id: 0, title: "quadratic" },
                      { id: 1, title: "rectangular" },
                    ],
                  },
                  {
                    id: 2,
                    title: "plateDecoration",
                    transl: "Оформление пластины",
                    selectedDecoration: 0,
                    decors: [
                      {
                        id: 0,
                        title: "engraving",
                        transl: "Гравировка",
                        selectedEngrave: 0,
                        engraves: [
                          { id: 0, title: "justMarried" },
                          { id: 1, title: "happyBirthdayToYou" },
                          { id: 2, title: "iLoveYou" },
                          { id: 3, title: "summer" },
                          { id: 4, title: "weddingDay" },
                          { id: 5, title: "newBaby" },
                          { id: 6, title: "mountains" },
                          { id: 7, title: "happyBirthday" },
                          { id: 8, title: "happyNewYear" },
                          { id: 9, title: "family" },
                          { id: 10, title: "bunny" },
                          { id: 11, title: "ship" },
                          { id: 12, title: "timeToTravel" },
                          { id: 13, title: "love" },
                          { id: 14, title: "happyBirthdaySecond" },
                          { id: 15, title: "airplane" },
                          { id: 16, title: "flight" },
                          { id: 17, title: "tree" },
                        ],
                      },
                      {
                        id: 1,
                        title: "text",
                        transl: "Текст",
                        typedText: "",
                        selectedSize: 0,
                        selectedFont: 0,
                        sizes: [
                          { id: 0, value: "20" },
                          { id: 1, value: "24" },
                          { id: 2, value: "26" },
                          { id: 3, value: "28" },
                          { id: 4, value: "30" },
                          { id: 5, value: "32" },
                          { id: 6, value: "35" },
                        ],
                        fonts: [
                          { id: 0, value: "Elisabethische" },
                          { id: 1, value: "Amatic SC" },
                          { id: 2, value: "SnowCap" },
                          { id: 3, value: "PerspectiveC" },
                          { id: 4, value: "Carefree Cyrillic" },
                          { id: 5, value: "Vivaldi script" },
                        ],
                      },
                    ],
                  },
                ],
              },
              { id: 3, title: "nothing", transl: "Без всего" },
            ],
          },
        },
        //Фотообложка
        {
          id: 2,
          title: "photoCover",
          transl: "Фотообложка",
          selectedType: 0,
          selectedColor: 0,
          blobImage: null,
          options: [
            {
              id: 0,
              title: "Эко-кожа",
              colors: [
                { id: 0, title: "blue" },
                { id: 1, title: "lowPurple" },
                { id: 2, title: "sandy" },
                { id: 3, title: "graySilk" },
                { id: 4, title: "gray" },
                { id: 5, title: "purplishGray" },
                { id: 6, title: "pearl" },
                { id: 7, title: "lightGreen" },
              ],
            },
            {
              id: 1,
              title: "Ткань",
              colors: [
                { id: 0, title: "green" },
                { id: 1, title: "blue" },
                { id: 2, title: "beige" },
                { id: 3, title: "red" },
                { id: 4, title: "purple" },
                { id: 5, title: "dark" },
                { id: 6, title: "orange" },
                { id: 7, title: "grey" },
              ],
            },
          ],
        },
      ],
    },
    pages: {
      //шаблоны(0) или цвета(1)
      selectedType: 0,
      //шаблоны для страницы(Неизменяемые, только юзать)
      templates: [
        //для квадратных
        {
          id: 0,
          for: "quadratic",
          templates: {
            leftside: [
              {
                id: 0,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "64%", h: "39%", l: "18%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "31%", h: "39%", l: "18%", t: "51%" },
                  },
                  {
                    id: 2,
                    position: { w: "31%", h: "39%", l: "51%", t: "51%" },
                  },
                ],
              },
              {
                id: 1,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "80%", h: "80%", l: "10%", t: "10%" },
                  },
                ],
              },
              {
                id: 2,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "60%", h: "60%", l: "20%", t: "20%" },
                  },
                ],
              },
              {
                id: 3,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "80%", h: "60%", l: "10%", t: "20%" },
                  },
                ],
              },
              {
                id: 4,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "80%", h: "100%", l: "10%", t: "0%" },
                  },
                ],
              },
              {
                id: 5,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "60%", h: "100%", l: "20%", t: "0%" },
                  },
                ],
              },
              {
                id: 6,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "39%", h: "60%", l: "10%", t: "20%" },
                  },
                  {
                    id: 1,
                    position: { w: "39%", h: "60%", l: "51%", t: "20%" },
                  },
                ],
              },
              {
                id: 7,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "64%", h: "39%", l: "18%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "64%", h: "39%", l: "18%", t: "51%" },
                  },
                ],
              },
              {
                id: 8,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "80%", h: "53%", l: "10%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "39%", h: "25%", l: "10%", t: "65%" },
                  },
                  {
                    id: 2,
                    position: { w: "39%", h: "25%", l: "51%", t: "65%" },
                  },
                ],
              },
              {
                id: 9,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "39%", h: "25%", l: "10%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "39%", h: "25%", l: "51%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "80%", h: "53%", l: "10%", t: "37%" },
                  },
                ],
              },
              {
                id: 10,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "100%", h: "100%", l: "0%", t: "0%" },
                  },
                ],
              },

              {
                id: 11,
                title: "template",
                elements: [
                  { id: 0, position: { w: "49%", h: "49%", l: "0%", t: "0%" } },
                  {
                    id: 1,
                    position: { w: "49%", h: "49%", l: "51%", t: "0%" },
                  },
                  {
                    id: 2,
                    position: { w: "49%", h: "49%", l: "0%", t: "51%" },
                  },
                  {
                    id: 3,
                    position: { w: "49%", h: "49%", l: "51%", t: "51%" },
                  },
                ],
              },
              {
                id: 12,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "39%", h: "29%", l: "10%", t: "20%" },
                  },
                  {
                    id: 1,
                    position: { w: "39%", h: "29%", l: "51%", t: "20%" },
                  },
                  {
                    id: 2,
                    position: { w: "39%", h: "29%", l: "10%", t: "51%" },
                  },
                  {
                    id: 3,
                    position: { w: "39%", h: "29%", l: "51%", t: "51%" },
                  },
                ],
              },
              {
                id: 13,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "39%", h: "25%", l: "10%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "39%", h: "25%", l: "51%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "39%", h: "26%", l: "10%", t: "37%" },
                  },
                  {
                    id: 3,
                    position: { w: "39%", h: "26%", l: "51%", t: "37%" },
                  },
                  {
                    id: 4,
                    position: { w: "39%", h: "25%", l: "10%", t: "65%" },
                  },
                  {
                    id: 5,
                    position: { w: "39%", h: "25%", l: "51%", t: "65%" },
                  },
                ],
              },
              {
                id: 14,
                title: "template",
                elements: [
                  { id: 0, position: { w: "32%", h: "48%", l: "0%", t: "0%" } },
                  {
                    id: 1,
                    position: { w: "32%", h: "48%", l: "34%", t: "0%" },
                  },
                  {
                    id: 2,
                    position: { w: "32%", h: "48%", l: "68%", t: "0%" },
                  },
                  {
                    id: 3,
                    position: { w: "32%", h: "50%", l: "0%", t: "50%" },
                  },
                  {
                    id: 4,
                    position: { w: "32%", h: "50%", l: "34%", t: "50%" },
                  },
                  {
                    id: 5,
                    position: { w: "32%", h: "50%", l: "68%", t: "50%" },
                  },
                ],
              },
              {
                id: 15,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "25%", h: "39%", l: "10%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "26%", h: "39%", l: "37%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "25%", h: "39%", l: "65%", t: "10%" },
                  },
                  {
                    id: 3,
                    position: { w: "25%", h: "39%", l: "10%", t: "51%" },
                  },
                  {
                    id: 4,
                    position: { w: "26%", h: "39%", l: "37%", t: "51%" },
                  },
                  {
                    id: 5,
                    position: { w: "25%", h: "39%", l: "65%", t: "51%" },
                  },
                ],
              },
            ],
            rightside: [
              {
                id: 0,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "64%", h: "39%", l: "18%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "31%", h: "39%", l: "18%", t: "51%" },
                  },
                  {
                    id: 2,
                    position: { w: "31%", h: "39%", l: "51%", t: "51%" },
                  },
                ],
              },
              {
                id: 1,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "80%", h: "80%", l: "10%", t: "10%" },
                  },
                ],
              },
              {
                id: 2,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "60%", h: "60%", l: "20%", t: "20%" },
                  },
                ],
              },
              {
                id: 3,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "80%", h: "60%", l: "10%", t: "20%" },
                  },
                ],
              },
              {
                id: 4,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "80%", h: "100%", l: "10%", t: "0%" },
                  },
                ],
              },
              {
                id: 5,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "60%", h: "100%", l: "20%", t: "0%" },
                  },
                ],
              },
              {
                id: 6,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "39%", h: "60%", l: "10%", t: "20%" },
                  },
                  {
                    id: 1,
                    position: { w: "39%", h: "60%", l: "51%", t: "20%" },
                  },
                ],
              },
              {
                id: 7,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "64%", h: "39%", l: "18%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "64%", h: "39%", l: "18%", t: "51%" },
                  },
                ],
              },
              {
                id: 8,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "80%", h: "53%", l: "10%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "39%", h: "25%", l: "10%", t: "65%" },
                  },
                  {
                    id: 2,
                    position: { w: "39%", h: "25%", l: "51%", t: "65%" },
                  },
                ],
              },
              {
                id: 9,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "39%", h: "25%", l: "10%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "39%", h: "25%", l: "51%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "80%", h: "53%", l: "10%", t: "37%" },
                  },
                ],
              },
              {
                id: 10,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "100%", h: "100%", l: "0%", t: "0%" },
                  },
                ],
              },

              {
                id: 11,
                title: "template",
                elements: [
                  { id: 0, position: { w: "49%", h: "49%", l: "0%", t: "0%" } },
                  {
                    id: 1,
                    position: { w: "49%", h: "49%", l: "51%", t: "0%" },
                  },
                  {
                    id: 2,
                    position: { w: "49%", h: "49%", l: "0%", t: "51%" },
                  },
                  {
                    id: 3,
                    position: { w: "49%", h: "49%", l: "51%", t: "51%" },
                  },
                ],
              },
              {
                id: 12,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "39%", h: "29%", l: "10%", t: "20%" },
                  },
                  {
                    id: 1,
                    position: { w: "39%", h: "29%", l: "51%", t: "20%" },
                  },
                  {
                    id: 2,
                    position: { w: "39%", h: "29%", l: "10%", t: "51%" },
                  },
                  {
                    id: 3,
                    position: { w: "39%", h: "29%", l: "51%", t: "51%" },
                  },
                ],
              },
              {
                id: 13,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "39%", h: "25%", l: "10%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "39%", h: "25%", l: "51%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "39%", h: "26%", l: "10%", t: "37%" },
                  },
                  {
                    id: 3,
                    position: { w: "39%", h: "26%", l: "51%", t: "37%" },
                  },
                  {
                    id: 4,
                    position: { w: "39%", h: "25%", l: "10%", t: "65%" },
                  },
                  {
                    id: 5,
                    position: { w: "39%", h: "25%", l: "51%", t: "65%" },
                  },
                ],
              },
              {
                id: 14,
                title: "template",
                elements: [
                  { id: 0, position: { w: "32%", h: "48%", l: "0%", t: "0%" } },
                  {
                    id: 1,
                    position: { w: "32%", h: "48%", l: "34%", t: "0%" },
                  },
                  {
                    id: 2,
                    position: { w: "32%", h: "48%", l: "68%", t: "0%" },
                  },
                  {
                    id: 3,
                    position: { w: "32%", h: "50%", l: "0%", t: "50%" },
                  },
                  {
                    id: 4,
                    position: { w: "32%", h: "50%", l: "34%", t: "50%" },
                  },
                  {
                    id: 5,
                    position: { w: "32%", h: "50%", l: "68%", t: "50%" },
                  },
                ],
              },
              {
                id: 15,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "25%", h: "39%", l: "10%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "26%", h: "39%", l: "37%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "25%", h: "39%", l: "65%", t: "10%" },
                  },
                  {
                    id: 3,
                    position: { w: "25%", h: "39%", l: "10%", t: "51%" },
                  },
                  {
                    id: 4,
                    position: { w: "26%", h: "39%", l: "37%", t: "51%" },
                  },
                  {
                    id: 5,
                    position: { w: "25%", h: "39%", l: "65%", t: "51%" },
                  },
                ],
              },
            ],
            centerside: [
              {
                id: 0,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "67.5%", h: "80%", l: "5%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "21.5%", h: "25%", l: "73.5%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "21.5%", h: "25%", l: "73.5%", t: "37%" },
                  },
                  {
                    id: 3,
                    position: { w: "21.5%", h: "25%", l: "73.5%", t: "65%" },
                  },
                ],
              },
              {
                id: 1,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "100%", h: "100%", l: "0%", t: "0%" },
                  },
                ],
              },
              {
                id: 2,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "90%", h: "80%", l: "5%", t: "10%" },
                  },
                ],
              },
              {
                id: 3,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "21.5%", h: "80%", l: "5.5%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "21.5%", h: "80%", l: "28%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "21.5%", h: "80%", l: "50.5%", t: "10%" },
                  },
                  {
                    id: 3,
                    position: { w: "21.5%", h: "80%", l: "73%", t: "10%" },
                  },
                ],
              },
              {
                id: 4,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "21.5%", h: "80%", l: "5%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "67.5%", h: "80%", l: "27.5%", t: "10%" },
                  },
                ],
              },
            ],
          },
        },
        //для альбомных
        {
          id: 1,
          for: "landscape",
          templates: {
            leftside: [
              {
                id: 0,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "42.67%", h: "60%", l: "6.67%", t: "20%" },
                  },
                  {
                    id: 1,
                    position: { w: "42.67%", h: "60%", l: "50.67%", t: "20%" },
                  },
                ],
              },
              {
                id: 1,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "20.67%", h: "39%", l: "28.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "20.67%", h: "39%", l: "50.67%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "42.67%", h: "39%", l: "28.67%", t: "52%" },
                  },
                ],
              },
              {
                id: 2,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "26%", h: "25%", l: "23.33%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "26%", h: "25%", l: "50.67%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "53.33%", h: "53%", l: "23.33%", t: "37%" },
                  },
                ],
              },
              {
                id: 3,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "26%", h: "25%", l: "23.33%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "26%", h: "25%", l: "50.67%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "26%", h: "25%", l: "23.33%", t: "37%" },
                  },
                  {
                    id: 3,
                    position: { w: "26%", h: "25%", l: "50.67%", t: "37%" },
                  },
                  {
                    id: 4,
                    position: { w: "26%", h: "25%", l: "23.33%", t: "65%" },
                  },
                  {
                    id: 5,
                    position: { w: "26%", h: "25%", l: "50.67%", t: "65%" },
                  },
                ],
              },
              {
                id: 4,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "28%", h: "60%", l: "6.67%", t: "20%" },
                  },
                  {
                    id: 1,
                    position: { w: "28%", h: "60%", l: "36%", t: "20%" },
                  },
                  {
                    id: 2,
                    position: { w: "28%", h: "60%", l: "65.33%", t: "20%" },
                  },
                ],
              },
              {
                id: 5,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "26%", h: "39%", l: "22.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "26%", h: "39%", l: "50%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "26%", h: "39%", l: "22.67%", t: "52%" },
                  },
                  {
                    id: 3,
                    position: { w: "26%", h: "39%", l: "50%", t: "52%" },
                  },
                ],
              },
              {
                id: 6,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "28%", h: "25%", l: "6.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "28%", h: "25%", l: "36%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "28%", h: "26%", l: "6.67%", t: "37%" },
                  },
                  {
                    id: 3,
                    position: { w: "28%", h: "26%", l: "36%", t: "37%" },
                  },
                  {
                    id: 4,
                    position: { w: "28%", h: "25%", l: "6.67%", t: "65%" },
                  },
                  {
                    id: 5,
                    position: { w: "28%", h: "25%", l: "36%", t: "65%" },
                  },
                ],
              },
              {
                id: 7,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "42.67%", h: "39%", l: "6.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "42.67%", h: "39%", l: "50.67%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "42.67%", h: "39%", l: "6.67%", t: "52%" },
                  },
                  {
                    id: 3,
                    position: { w: "42.67%", h: "39%", l: "50.67%", t: "52%" },
                  },
                ],
              },
              {
                id: 8,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "42.67%", h: "40%", l: "6.67%", t: "30%" },
                  },
                  {
                    id: 1,
                    position: { w: "42.67%", h: "40%", l: "50.67%", t: "30%" },
                  },
                ],
              },
              {
                id: 9,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "57.33%", h: "53%", l: "6.67%", t: "37%" },
                  },
                  {
                    id: 1,
                    position: { w: "28%", h: "25%", l: "6.67%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "28%", h: "25%", l: "36%", t: "10%" },
                  },
                  {
                    id: 3,
                    position: { w: "28%", h: "25%", l: "65.33%", t: "10%" },
                  },
                  {
                    id: 4,
                    position: { w: "28%", h: "26%", l: "65.33%", t: "37%" },
                  },
                  {
                    id: 5,
                    position: { w: "28%", h: "25%", l: "65.33%", t: "65%" },
                  },
                ],
              },
              {
                id: 10,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "42.67%", h: "39%", l: "28.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "42.67%", h: "39%", l: "28.67%", t: "51%" },
                  },
                ],
              },

              {
                id: 11,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "86.67%", h: "80%", l: "6.67%", t: "10%" },
                  },
                ],
              },
              {
                id: 12,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "100%", h: "100%", l: "0%", t: "0%" },
                  },
                ],
              },
              {
                id: 13,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "42.67%", h: "80%", l: "6.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "42.67%", h: "80%", l: "50.67%", t: "10%" },
                  },
                ],
              },
              {
                id: 14,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "42.67%", h: "100%", l: "28.67%", t: "0%" },
                  },
                ],
              },
              {
                id: 15,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "20.67%", h: "48%", l: "16.67%", t: "0%" },
                  },
                  {
                    id: 1,
                    position: { w: "20.67%", h: "48%", l: "38.67%", t: "0%" },
                  },
                  {
                    id: 2,
                    position: { w: "20.67%", h: "48%", l: "60.67%", t: "0%" },
                  },
                  {
                    id: 3,
                    position: { w: "20.67%", h: "48%", l: "16.67%", t: "52%" },
                  },
                  {
                    id: 4,
                    position: { w: "20.67%", h: "48%", l: "38.67%", t: "52%" },
                  },
                  {
                    id: 5,
                    position: { w: "20.67%", h: "48%", l: "60.67%", t: "52%" },
                  },
                ],
              },
            ],
            rightside: [
              {
                id: 0,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "42.67%", h: "60%", l: "6.67%", t: "20%" },
                  },
                  {
                    id: 1,
                    position: { w: "42.67%", h: "60%", l: "50.67%", t: "20%" },
                  },
                ],
              },
              {
                id: 1,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "20.67%", h: "39%", l: "28.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "20.67%", h: "39%", l: "50.67%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "42.67%", h: "39%", l: "28.67%", t: "52%" },
                  },
                ],
              },
              {
                id: 2,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "26%", h: "25%", l: "23.33%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "26%", h: "25%", l: "50.67%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "53.33%", h: "53%", l: "23.33%", t: "37%" },
                  },
                ],
              },
              {
                id: 3,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "26%", h: "25%", l: "23.33%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "26%", h: "25%", l: "50.67%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "26%", h: "25%", l: "23.33%", t: "37%" },
                  },
                  {
                    id: 3,
                    position: { w: "26%", h: "25%", l: "50.67%", t: "37%" },
                  },
                  {
                    id: 4,
                    position: { w: "26%", h: "25%", l: "23.33%", t: "65%" },
                  },
                  {
                    id: 5,
                    position: { w: "26%", h: "25%", l: "50.67%", t: "65%" },
                  },
                ],
              },
              {
                id: 4,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "28%", h: "60%", l: "6.67%", t: "20%" },
                  },
                  {
                    id: 1,
                    position: { w: "28%", h: "60%", l: "36%", t: "20%" },
                  },
                  {
                    id: 2,
                    position: { w: "28%", h: "60%", l: "65.33%", t: "20%" },
                  },
                ],
              },
              {
                id: 5,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "26%", h: "39%", l: "22.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "26%", h: "39%", l: "50%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "26%", h: "39%", l: "22.67%", t: "52%" },
                  },
                  {
                    id: 3,
                    position: { w: "26%", h: "39%", l: "50%", t: "52%" },
                  },
                ],
              },
              {
                id: 6,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "28%", h: "25%", l: "6.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "28%", h: "25%", l: "36%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "28%", h: "26%", l: "6.67%", t: "37%" },
                  },
                  {
                    id: 3,
                    position: { w: "28%", h: "26%", l: "36%", t: "37%" },
                  },
                  {
                    id: 4,
                    position: { w: "28%", h: "25%", l: "6.67%", t: "65%" },
                  },
                  {
                    id: 5,
                    position: { w: "28%", h: "25%", l: "36%", t: "65%" },
                  },
                ],
              },
              {
                id: 7,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "42.67%", h: "39%", l: "6.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "42.67%", h: "39%", l: "50.67%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "42.67%", h: "39%", l: "6.67%", t: "52%" },
                  },
                  {
                    id: 3,
                    position: { w: "42.67%", h: "39%", l: "50.67%", t: "52%" },
                  },
                ],
              },
              {
                id: 8,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "42.67%", h: "40%", l: "6.67%", t: "30%" },
                  },
                  {
                    id: 1,
                    position: { w: "42.67%", h: "40%", l: "50.67%", t: "30%" },
                  },
                ],
              },
              {
                id: 9,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "57.33%", h: "53%", l: "6.67%", t: "37%" },
                  },
                  {
                    id: 1,
                    position: { w: "28%", h: "25%", l: "6.67%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "28%", h: "25%", l: "36%", t: "10%" },
                  },
                  {
                    id: 3,
                    position: { w: "28%", h: "25%", l: "65.33%", t: "10%" },
                  },
                  {
                    id: 4,
                    position: { w: "28%", h: "26%", l: "65.33%", t: "37%" },
                  },
                  {
                    id: 5,
                    position: { w: "28%", h: "25%", l: "65.33%", t: "65%" },
                  },
                ],
              },
              {
                id: 10,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "42.67%", h: "39%", l: "28.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "42.67%", h: "39%", l: "28.67%", t: "51%" },
                  },
                ],
              },

              {
                id: 11,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "86.67%", h: "80%", l: "6.67%", t: "10%" },
                  },
                ],
              },
              {
                id: 12,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "100%", h: "100%", l: "0%", t: "0%" },
                  },
                ],
              },
              {
                id: 13,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "42.67%", h: "80%", l: "6.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "42.67%", h: "80%", l: "50.67%", t: "10%" },
                  },
                ],
              },
              {
                id: 14,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "42.67%", h: "100%", l: "28.67%", t: "0%" },
                  },
                ],
              },
              {
                id: 15,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "20.67%", h: "48%", l: "16.67%", t: "0%" },
                  },
                  {
                    id: 1,
                    position: { w: "20.67%", h: "48%", l: "38.67%", t: "0%" },
                  },
                  {
                    id: 2,
                    position: { w: "20.67%", h: "48%", l: "60.67%", t: "0%" },
                  },
                  {
                    id: 3,
                    position: { w: "20.67%", h: "48%", l: "16.67%", t: "52%" },
                  },
                  {
                    id: 4,
                    position: { w: "20.67%", h: "48%", l: "38.67%", t: "52%" },
                  },
                  {
                    id: 5,
                    position: { w: "20.67%", h: "48%", l: "60.67%", t: "52%" },
                  },
                ],
              },
            ],
            centerside: [
              {
                id: 0,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "71%", h: "80%", l: "3.67%", t: "10%" },
                  },
                ],
              },
              {
                id: 1,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "13%", h: "25%", l: "3.67%", t: "10%" },
                  },
                  {
                    id: 1,
                    position: { w: "13%", h: "25%", l: "17.33%", t: "10%" },
                  },
                  {
                    id: 2,
                    position: { w: "26.67%", h: "53%", l: "3.67%", t: "37%" },
                  },
                  {
                    id: 3,
                    position: { w: "43.33%", h: "80%", l: "31%", t: "10%" },
                  },
                  {
                    id: 4,
                    position: { w: "21.33%", h: "80%", l: "75%", t: "10%" },
                  },
                ],
              },
              {
                id: 2,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "100%", h: "100%", l: "0%", t: "0%" },
                  },
                ],
              },
              {
                id: 3,
                title: "template",
                elements: [
                  {
                    id: 0,
                    position: { w: "66.67%", h: "100%", l: "7.67%", t: "0%" },
                  },
                  {
                    id: 1,
                    position: { w: "17.33%", h: "32%", l: "75%", t: "0%" },
                  },
                  {
                    id: 2,
                    position: { w: "17.33%", h: "32%", l: "75%", t: "34%" },
                  },
                  {
                    id: 3,
                    position: { w: "17.33%", h: "32%", l: "75%", t: "68%" },
                  },
                ],
              },
            ],
          },
        },
      ],
      //Цвета для страниц
      colors: [
        { id: 0, color: "white", transl: "белый", hex: "#FFFFFF" },
        { id: 1, color: "pink", transl: "розовый", hex: "#FFB0AA" },
        { id: 2, color: "orange", transl: "оранжевый", hex: "#FEC19E" },
        {
          id: 3,
          color: "highOrange",
          transl: "светло-оранжевый",
          hex: "#FFE5C8",
        },
        {
          id: 4,
          color: "highGreen",
          transl: "светло-зеленый",
          hex: "#DFEECB",
        },
        { id: 5, color: "blue", transl: "голубой", hex: "#A5D8E6" },
        { id: 6, color: "purple", transl: "фиолетовый", hex: "#CBC4E2" },
        {
          id: 7,
          color: "highPink",
          transl: "светло-розовый",
          hex: "#FFE2E2",
        },
        { id: 8, color: "grass", transl: "травяной", hex: "#8EF6E4" },
        {
          id: 9,
          color: "veryHighPink",
          transl: "пре-светло-розовый",
          hex: "#FEF0FF",
        },
        {
          id: 10,
          color: "veryHighGreen",
          transl: "пре-светло-зеленый",
          hex: "#D7EEDE",
        },
        {
          id: 10,
          color: "highBlue",
          transl: "светло-голубой",
          hex: "#F0F8FF",
        },
      ],

      //Страницы
      papers: {
        selectedPage: 0,
        pages: [
          {
            id: 0,
            selectedSide: "lrside", // lrside(leftside + rightside) | cside(centerside)
            leftsideHex: "#FFFFFF",
            rightsideHex: "#FFFFFF",

            templates: [
              //Левая страница
              { id: 0, title: "leftside", template: {} },
              //Правая страница
              { id: 1, title: "rightside", template: {} },
              //Разворот
              { id: 2, title: "centerside", template: {} },
            ],
          },
          {
            id: 1,
            selectedSide: "lrside", // centerside or leftside&rightside
            
            leftsideHex: "#FFFFFF",
            rightsideHex: "#FFFFFF",
            templates: [
              //Левая страница
              { id: 0, title: "leftside", template: [] },
              //Правая страница
              { id: 1, title: "rightside", template: [] },
              //Разворот
              { id: 2, title: "centerside", template: [] },
            ],
          },
          {
            id: 2,
            selectedSide: "lrside", // centerside or leftside&rightside
            
            leftsideHex: "#FFFFFF",
            rightsideHex: "#FFFFFF",
            templates: [
              //Левая страница
              { id: 0, title: "leftside", template: [] },
              //Правая страница
              { id: 1, title: "rightside", template: [] },
              //Разворот
              { id: 2, title: "centerside", template: [] },
            ],
          },
          {
            id: 3,
            selectedSide: "lrside", // centerside or leftside&rightside
            
            leftsideHex: "#FFFFFF",
            rightsideHex: "#FFFFFF",
            templates: [
              //Левая страница
              { id: 0, title: "leftside", template: [] },
              //Правая страница
              { id: 1, title: "rightside", template: [] },
              //Разворот
              { id: 2, title: "centerside", template: [] },
            ],
          },
          {
            id: 4,
            selectedSide: "lrside", // centerside or leftside&rightside
            
            leftsideHex: "#FFFFFF",
            rightsideHex: "#FFFFFF",
            templates: [
              //Левая страница
              { id: 0, title: "leftside", template: [] },
              //Правая страница
              { id: 1, title: "rightside", template: [] },
              //Разворот
              { id: 2, title: "centerside", template: [] },
            ],
          },
          {
            id: 5,
            selectedSide: "lrside", // centerside or leftside&rightside
            leftsideHex: "#FFFFFF",
            rightsideHex: "#FFFFFF",
            templates: [
              //Левая страница
              { id: 0, title: "leftside", template: [] },
              //Правая страница
              { id: 1, title: "rightside", template: [] },
              //Разворот
              { id: 2, title: "centerside", template: [] },
            ],
          },
          {
            id: 6,
            selectedSide: "lrside", // centerside or leftside&rightside
            
            leftsideHex: "#FFFFFF",
            rightsideHex: "#FFFFFF",
            templates: [
              //Левая страница
              { id: 0, title: "leftside", template: [] },
              //Правая страница
              { id: 1, title: "rightside", template: [] },
              //Разворот
              { id: 2, title: "centerside", template: [] },
            ],
          },
          {
            id: 7,
            selectedSide: "lrside", // centerside or leftside&rightside
            
            leftsideHex: "#FFFFFF",
            rightsideHex: "#FFFFFF",
            templates: [
              //Левая страница
              { id: 0, title: "leftside", template: [] },
              //Правая страница
              { id: 1, title: "rightside", template: [] },
              //Разворот
              { id: 2, title: "centerside", template: [] },
            ],
          },
          {
            id: 8,
            selectedSide: "lrside", // centerside or leftside&rightside
            
            leftsideHex: "#FFFFFF",
            rightsideHex: "#FFFFFF",
            templates: [
              //Левая страница
              { id: 0, title: "leftside", template: [] },
              //Правая страница
              { id: 1, title: "rightside", template: [] },
              //Разворот
              { id: 2, title: "centerside", template: [] },
            ],
          },
          {
            id: 9,
            selectedSide: "lrside", // centerside or leftside&rightside
            
            leftsideHex: "#FFFFFF",
            rightsideHex: "#FFFFFF",
            templates: [
              //Левая страница
              { id: 0, title: "leftside", template: [] },
              //Правая страница
              { id: 1, title: "rightside", template: [] },
              //Разворот
              { id: 2, title: "centerside", template: [] },
            ],
          },
        ],
      },
      uploads: [],
    },
  },
  reducers: {
    //SIZE////////////////////////////////////////////////////////
    handleChangeSizeType(state, action) {
      state.size.selectedType = action.payload;
      let pages = [];
      for (let i = 0; i < 10; i++) {
        let page = {
          id: i,
          selectedSide: "lrside",
          
          leftsideHex: "#FFFFFF",
          rightsideHex: "#FFFFFF",
          templates: [
            { id: 0, title: "leftside", template: [] },
            //Правая страница
            { id: 1, title: "rightside", template: [] },
            //Разворот
            { id: 2, title: "centerside", template: [] },
          ],
        };
        pages.push(page);
      }
      state.pages.papers.pages = pages;
    },
    handleChangeSizeOf(state, action) {
      const { idType, idSize } = action.payload;
      // let neededStateSize;
      switch (idType) {
        case 0:
          state.size.types[0].selectedSize = idSize;
          break;
        case 1:
          state.size.types[1].selectedSize = idSize;
          break;
        default:
          break;
      }
    },
    handleChangeScale(state, action) {
      state.size.scale = action.payload;
    },

    //STEP///////////////////////////////////////////////////////////////
    handleIncrementStep(state) {
      if (state.header_content.step !== 5) state.header_content.step += 1;
    },
    handleDecrementStep(state) {
      if (state.header_content.step !== 1) state.header_content.step -= 1;
    },

    //COVER///////////////////////////////////////////////////////////////////
    handleChangeCoverType(state, action) {
      state.cover.selectedType = action.payload;
    },
    handleChangeCoverEcoColor(state, action) {
      if (action.payload.type === "eco") {
        state.cover.types[0].selectedColor = action.payload.colorId;
      } else {
        state.cover.types[1].selectedColor = action.payload.colorId;
      }
    },
    handleChangeCoverDecor(state, action) {
      if (action.payload.type === "eco") {
        state.cover.types[0].selectedDecor = action.payload.decorId;
      } else {
        state.cover.types[1].selectedDecor = action.payload.decorId;
      }
    },
    handleChangeCoverEcoLetteringColor(state, action) {
      if (action.payload.type === "eco") {
        state.cover.types[0].features.decor[0].options[0].selectedColor =
          action.payload.colorId;
      } else {
        state.cover.types[1].features.decor[0].options[0].selectedColor =
          action.payload.colorId;
      }
    },
    handleChangeCoverEcoDesign(state, action) {
      if (action.payload.type === "eco") {
        state.cover.types[0].features.decor[0].options[1].selectedDesign =
          action.payload.designId;
      } else {
        state.cover.types[1].features.decor[0].options[1].selectedDesign =
          action.payload.designId;
      }
    },
    handleChangeEcoPhotoBidSize(state, action) {
      if (action.payload.type === "eco") {
        state.cover.types[0].features.decor[1].selectedSize =
          action.payload.sizeId;
      } else {
        state.cover.types[1].features.decor[1].selectedSize =
          action.payload.sizeId;
      }
    },
    handleChangeEcoMetalplateColor(state, action) {
      if (action.payload.type === "eco") {
        state.cover.types[0].features.decor[2].options[0].selectedColor =
          action.payload.colorId;
      } else {
        state.cover.types[1].features.decor[2].options[0].selectedColor =
          action.payload.colorId;
      }
    },
    handleChangeEcoMetalplateSize(state, action) {
      if (action.payload.type === "eco") {
        state.cover.types[0].features.decor[2].options[1].selectedSize =
          action.payload.sizeId;
      } else {
        state.cover.types[1].features.decor[2].options[1].selectedSize =
          action.payload.sizeId;
      }
    },
    handleChangeEcoMetalplateDecoration(state, action) {
      if (action.payload.type === "eco") {
        state.cover.types[0].features.decor[2].options[2].selectedDecoration =
          action.payload.decId;
      } else {
        state.cover.types[1].features.decor[2].options[2].selectedDecoration =
          action.payload.decId;
      }
    },
    handleChangeEcoMetalplateEngrave(state, action) {
      if (action.payload.type === "eco") {
        state.cover.types[0].features.decor[2].options[2].decors[0].selectedEngrave =
          action.payload.egsId;
      } else {
        state.cover.types[1].features.decor[2].options[2].decors[0].selectedEngrave =
          action.payload.egsId;
      }
    },
    //PHOTOCOVER/////////////////////////////////////////
    handleChangePhotoCoverColor(state, action) {
      state.cover.types[2].selectedType = action.payload.typeId;
      state.cover.types[2].selectedColor = action.payload.colorId;
    },
    //PHOTOBID FOR ALL //////////////
    handleChangePhotoBidBlobImage(state, action) {
      if (action.payload.type === "eco") {
        state.cover.types[0].features.decor[1].blobImage = action.payload.blob;
      } else {
        state.cover.types[1].features.decor[1].blobImage = action.payload.blob;
      }
    },
    //TEXT SIZE AND FONT METALPLATE//////////////////
    handleChangeMetalplateTextSize(state, action) {
      let { value, typeId } = action.payload;
      if (typeId === "eco") {
        state.cover.types[0].features.decor[2].options[2].decors[1].selectedSize =
          value;
      } else {
        state.cover.types[1].features.decor[2].options[2].decors[1].selectedSize =
          value;
      }
    },
    handleChangeMetalplateTextFont(state, action) {
      let { value, typeId } = action.payload;
      if (typeId === "eco") {
        state.cover.types[0].features.decor[2].options[2].decors[1].selectedFont =
          value;
      } else {
        state.cover.types[1].features.decor[2].options[2].decors[1].selectedFont =
          value;
      }
    },
    handleChangeMetalplateText(state, action) {
      let { value, typeId } = action.payload;
      if (typeId === "eco") {
        state.cover.types[0].features.decor[2].options[2].decors[1].typedText =
          value;
      } else {
        state.cover.types[1].features.decor[2].options[2].decors[1].typedText =
          value;
      }
    },
    handleChangePhotoCoverImage(state, action) {
      state.cover.types[2].blobImage = action.payload;
    },
    // PAGES////////////////////////
    //выбрать title шаблоны или фон
    handleChangePagesType(state, action) {
      state.pages.selectedType = action.payload;
    },
    //загрузить картинку(и) в uploads
    handleAddImageToUploads(state, action) {
      let { imageBlob, lastModified, name, size, type } = action.payload;
      let prevUploads = [...current(state.pages.uploads)];
      let newImg = {
        id: prevUploads.length,
        blob: imageBlob,
        lastModified,
        name,
        size,
        type,
      };
      let newUploads = [...prevUploads, newImg];
      state.pages.uploads = newUploads;
    },
    //удалить картинку по id
    handleDeleteImageFromUploads(state, action) {
      let prevUploads = [...current(state.pages.uploads)];
      let id = action.payload;
      let newUploads = prevUploads.filter((upload) => upload.id !== id);
      state.pages.uploads = newUploads;
    },
    //PAGES PAPERS////
    //выбрать страница
    handleChangeSelectedPage(state, action) {
      state.pages.papers.selectedPage = action.payload;
    },
    handleSetColorToSidePage(state,action){
      const {colorHex,sideToChange}=action.payload;
      let selectedPage = {
        ...current(
          state.pages.papers.pages[state.pages.papers.selectedPage]
        )
      }
      if(sideToChange==="leftside"){
        selectedPage.leftsideHex=colorHex;
      }
      else{
        selectedPage.rightsideHex=colorHex;
      }
      state.pages.papers.pages[state.pages.papers.selectedPage]=selectedPage;
    },
    //Добавить новую страницу
    handleAddPageToPages(state, action) {
      let currentId = action.payload;
      let prevPages = [...current(state.pages.papers.pages)];
      let newPage = {
        id: 0,
        selectedSide: "lrside", // centerside or leftside&rightside
        
        leftsideHex: "#FFFFFF",
        rightsideHex: "#FFFFFF",
        templates: [
          //Левая страница
          { id: 0, title: "leftside", template: [] },
          //Правая страница
          { id: 1, title: "rightside", template: [] },
          //Разворот
          { id: 2, title: "centerside", template: [] },
        ],
      };
      Array.prototype.insert = function (index, item) {
        this.splice(index, 0, item);
      };
      prevPages.insert(currentId + 1, newPage);
      let sortedPages = [...prevPages].map((page, idx) => ({
        ...page,
        id: idx,
      }));
      state.pages.papers.pages = sortedPages;
      state.pages.papers.selectedPage = currentId + 1;
    },
    //Удалить страницу
    handleDeletePageFromPages(state, action) {
      let deleteId = action.payload;
      let prevPages = [...current(state.pages.papers.pages)];
      if (prevPages.length > 10) {
        let newPages = prevPages.filter((page) => page.id !== deleteId);
        let sortedPages = [...newPages].map((page, idx) => ({
          ...page,
          id: idx,
        }));
        if (deleteId === prevPages.length - 1) {
          state.pages.papers.selectedPage = deleteId - 1;
        }

        state.pages.papers.pages = sortedPages;
      }
    },
    //добавить шаблон на страницу(на левую или правую, либо разворот)
    handleSetTemplateToPage(state, action) {
      const { sideToChange, tmplId, selectedSide, pageType } = action.payload;
      //выбранная страница
      let selectedPage = {
        ...current(
          state.pages.papers.pages[state.pages.papers.selectedPage]
        )
      }
      //нужный темплейт из стейта
      let neededTemplate;
      switch (sideToChange) {
        case "leftside":
          neededTemplate = current(
            state.pages.templates[pageType].templates.leftside[tmplId]
          );
          break;
        case "rightside":
          neededTemplate = current(
            state.pages.templates[pageType].templates.rightside[tmplId]);


          break;
        case "centerside":
          neededTemplate = current(
            state.pages.templates[pageType].templates.centerside[tmplId]);


          break;
        default:
          break;
      }

      selectedPage.selectedSide = selectedSide;
      let templates = [...selectedPage.templates];
      let newTemplates = [];
      if (sideToChange === "leftside") {
        newTemplates = [...templates].map((tmpl) => {
          if (tmpl.title === "leftside") {
            return { ...tmpl, template: neededTemplate }
          }
          else if (tmpl.title === "rightside") {
            return { ...tmpl }
          }
          else {
            return { ...tmpl, template: {} }
          }

        })
      }
      else if (sideToChange === "rightside") {
        newTemplates = [...templates].map((tmpl) => {
          if (tmpl.title === "rightside") {
            return { ...tmpl, template: neededTemplate }
          }
          else if (tmpl.title === "leftside") {
            return { ...tmpl }
          }
          else {
            return { ...tmpl, template: {} }
          }
        })
      }
      else {
        newTemplates = [...templates].map((tmpl) => {
          if (tmpl.title === "centerside") {
            return { ...tmpl, template: neededTemplate }
          }
          else {
            return { ...tmpl, template: {} }
          }
        })
      }

      selectedPage.templates = newTemplates;
      state.pages.papers.pages[state.pages.papers.selectedPage] = selectedPage;







    }


  },
  extraReducers: {},
});
export const {
  handleChangeSizeType,
  handleChangeSizeOf,
  handleIncrementStep,
  handleDecrementStep,
  handleChangeScale,
  handleChangeCoverType,
  handleChangeCoverEcoColor,
  handleChangeCoverDecor,
  handleChangeCoverEcoLetteringColor,
  handleChangeCoverEcoDesign,
  handleChangeEcoPhotoBidSize,
  handleChangeEcoMetalplateColor,
  handleChangeEcoMetalplateSize,
  handleChangeEcoMetalplateDecoration,
  handleChangeEcoMetalplateEngrave,
  handleChangePhotoCoverColor,
  handleChangePhotoBidBlobImage,
  handleChangeMetalplateTextSize,
  handleChangeMetalplateTextFont,
  handleChangeMetalplateText,
  handleChangePhotoCoverImage,
  handleChangePagesType,
  handleAddImageToUploads,
  handleDeleteImageFromUploads,
  handleChangeSelectedPage,
  handleAddPageToPages,
  handleDeletePageFromPages,
  handleSetTemplateToPage,
  handleSetColorToSidePage
} = constructorSlice.actions;
export default constructorSlice.reducer;
