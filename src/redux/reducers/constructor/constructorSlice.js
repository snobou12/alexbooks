
import { createSlice, current } from "@reduxjs/toolkit";

import { BASE_URL } from "../../../static/values";
import { contsructorDefaultState } from "./contsructorDefaultState";
import {
  getAlbumIDS,
  deleteAlbumById,
  newAlbum,
  getAlbumById,
} from "./actionConstructorCreator";
const constructorSlice = createSlice({
  name: "constructor",
  initialState: {
    albumsId: {
      isLoading: true,
      ids: [],
    },
    header_content: {
      step: 1,
      price: 2190,
      albumName: "",
      albumId: 7155,
      countOfAlbums: 1,
      coverPreviewImage: "",
    },
    constructorLoading: false,
    newAlbumLoading: false,
    size: {
      selectedType: 0,
      scale: 0.75,
      types: [
        {
          id: 0,
          title: "quadratic",
          transl: "Квадратная",
          sizes: [
            { id: 0, size: "15x15", price: 2190 },
            { id: 1, size: "20x20", price: 3590 },
            { id: 2, size: "25x25", price: 5490 },
            { id: 3, size: "30x30", price: 6990 },
          ],
          selectedSize: 0,
        },
        {
          id: 1,
          title: "landscape",
          transl: "Альбомная",
          sizes: [
            { id: 0, size: "15x22,5", price: 2490 },
            { id: 1, size: "20x32", price: 5290 },
            { id: 2, size: "30x40", price: 8890 },
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
                        typedText: `${"\n"}${"\n"}${"\n"}`,
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
                        typedText: `${"\n"}${"\n"}${"\n"}`,
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
    pagesValid: [],
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
        { id: 0, color: "white", transl: "белый", hex: "FFFFFF" },
        { id: 1, color: "pink", transl: "розовый", hex: "FFB0AA" },
        { id: 2, color: "orange", transl: "оранжевый", hex: "FEC19E" },
        {
          id: 3,
          color: "highOrange",
          transl: "светло-оранжевый",
          hex: "FFE5C8",
        },
        {
          id: 4,
          color: "highGreen",
          transl: "светло-зеленый",
          hex: "DFEECB",
        },
        { id: 5, color: "blue", transl: "голубой", hex: "A5D8E6" },
        { id: 6, color: "purple", transl: "фиолетовый", hex: "CBC4E2" },
        {
          id: 7,
          color: "highPink",
          transl: "светло-розовый",
          hex: "FFE2E2",
        },
        { id: 8, color: "grass", transl: "травяной", hex: "8EF6E4" },
        {
          id: 9,
          color: "veryHighPink",
          transl: "пре-светло-розовый",
          hex: "FEF0FF",
        },
        {
          id: 10,
          color: "veryHighGreen",
          transl: "пре-светло-зеленый",
          hex: "D7EEDE",
        },
        {
          id: 10,
          color: "highBlue",
          transl: "светло-голубой",
          hex: "F0F8FF",
        },
      ],

      //Страницы
      papers: {
        selectedPage: 0,
        pages: [
          {
            id: 0,
            selectedSide: "lrside", // lrside(leftside + rightside) | cside(centerside)
            leftsideHex: "FFFFFF",
            rightsideHex: "FFFFFF",
            templateIsValid: true,
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

            leftsideHex: "FFFFFF",
            rightsideHex: "FFFFFF",
            templateIsValid: true,
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
            id: 2,
            selectedSide: "lrside", // centerside or leftside&rightside

            leftsideHex: "FFFFFF",
            rightsideHex: "FFFFFF",
            templateIsValid: true,
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
            id: 3,
            selectedSide: "lrside", // centerside or leftside&rightside

            leftsideHex: "FFFFFF",
            rightsideHex: "FFFFFF",
            templateIsValid: true,
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
            id: 4,
            selectedSide: "lrside", // centerside or leftside&rightside

            leftsideHex: "FFFFFF",
            rightsideHex: "FFFFFF",
            templateIsValid: true,
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
            id: 5,
            selectedSide: "lrside", // centerside or leftside&rightside
            leftsideHex: "FFFFFF",
            rightsideHex: "FFFFFF",
            templateIsValid: true,
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
            id: 6,
            selectedSide: "lrside", // centerside or leftside&rightside

            leftsideHex: "FFFFFF",
            rightsideHex: "FFFFFF",
            templateIsValid: true,
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
            id: 7,
            selectedSide: "lrside", // centerside or leftside&rightside

            leftsideHex: "FFFFFF",
            rightsideHex: "FFFFFF",
            templateIsValid: true,
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
            id: 8,
            selectedSide: "lrside", // centerside or leftside&rightside

            leftsideHex: "FFFFFF",
            rightsideHex: "FFFFFF",
            templateIsValid: true,
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
            id: 9,
            selectedSide: "lrside", // centerside or leftside&rightside

            leftsideHex: "FFFFFF",
            rightsideHex: "FFFFFF",
            templateIsValid: true,
            templates: [
              //Левая страница
              { id: 0, title: "leftside", template: {} },
              //Правая страница
              { id: 1, title: "rightside", template: {} },
              //Разворот
              { id: 2, title: "centerside", template: {} },
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
          templateIsValid: true,
          leftsideHex: "FFFFFF",
          rightsideHex: "FFFFFF",
          templates: [
            { id: 0, title: "leftside", template: {} },
            //Правая страница
            { id: 1, title: "rightside", template: {} },
            //Разворот
            { id: 2, title: "centerside", template: {} },
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

    //HEADER_CONTENT///////////////////////////////////////////////////////////////
    handleIncrementStep(state) {
      if (state.header_content.step !== 3) state.header_content.step += 1;
    },
    handleDecrementStep(state) {
      if (state.header_content.step !== 1) state.header_content.step -= 1;
    },
    handleChangeAlbumName(state, action) {
      state.header_content.albumName = action.payload;
    },
    handleChangePrice(state, action) {
      state.header_content.price = action.payload;
    },
    setAlbumId(state, action) {
      state.header_content.albumId = action.payload;
    },
    setStageURI(state, action) {
      state.header_content.stageURI = action.payload;
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
      let { newImg } = action.payload;
      let prevUploads = [...current(state.pages.uploads)];
      let newUploads = [...prevUploads, newImg];
      state.pages.uploads = newUploads;
    },
    //удалить картинку по id из Uploads
    handleDeleteImageFromUploads(state, action) {
      let prevUploads = [...current(state.pages.uploads)];
      let id = action.payload;
      let newUploads = prevUploads.filter((upload) => upload.id !== id);


      // Добавить удаление Картинок из темплейтов;

      let allPages=[...current(state.pages.papers.pages)];
      let needToRemoveArray=[];
      allPages.forEach((page,pageIdx)=>{
        page.templates.forEach((tmpl,tmplIdx)=>{
          if(Object.keys(tmpl.template).length > 0){
            tmpl.template.elements.forEach((elem,elemIdx)=>{
              if(elem?.image){
                if(Object.keys(elem.image).length > 0 ){
                  if(elem.image.id === id){
                    let elementIdx=elemIdx;
                    let templateIdx=tmplIdx;
                    let neededPageIdx = pageIdx;
                    let elementToDelete={
                      elementIdx,templateIdx,neededPageIdx
                    }
                    needToRemoveArray.push(elementToDelete);
                  }
                }
              }
            })
          }
        })
      })
      console.log(needToRemoveArray);
      if(needToRemoveArray.length > 0){
        
       
        for (let removeItem of needToRemoveArray){
          
          let selectedPage = {
            ...state.pages.papers.pages[removeItem.neededPageIdx],
          };
          let templatesOfSelectedPage = [...selectedPage.templates];
          
          let template = { ...templatesOfSelectedPage[removeItem.templateIdx] };
          let tmplTemplate = { ...template.template };
          let tmplElements = [...tmplTemplate.elements];
          let tmplNewElements = tmplElements.map((elem) => {
            if (elem.id === removeItem.elementIdx) {
              let prevElem = { ...elem };
              delete prevElem["image"];
              return { ...prevElem };
            } else {
              return { ...elem };
            }
          });
          tmplTemplate.elements = tmplNewElements;
          template.template = tmplTemplate;

          let newTemplates = templatesOfSelectedPage.map((templ) => {
            if (templ.id === removeItem.templateIdx) {
              return { ...template };
            } else {
              return { ...templ };
            }
          });

          selectedPage.templates = newTemplates;

          state.pages.papers.pages[removeItem.neededPageIdx] = selectedPage;
          
        }
      }
      state.pages.uploads = newUploads;

    },
    //PAGES PAPERS////
    //выбрать страница
    handleChangeSelectedPage(state, action) {
      state.pages.papers.selectedPage = action.payload;
    },
    handleSetColorToSidePage(state, action) {
      const { colorHex, sideToChange } = action.payload;
      let selectedPage = {
        ...current(state.pages.papers.pages[state.pages.papers.selectedPage]),
      };
      if (sideToChange === "leftside") {
        selectedPage.leftsideHex = colorHex;
      } else {
        selectedPage.rightsideHex = colorHex;
      }
      state.pages.papers.pages[state.pages.papers.selectedPage] = selectedPage;
    },
    //Добавить новую страницу
    handleAddPageToPages(state, action) {
      let currentId = action.payload;
      let prevPages = [...current(state.pages.papers.pages)];
      let newPage = {
        id: 0,
        selectedSide: "lrside", // centerside or leftside&rightside
        templateIsValid: true,
        leftsideHex: "FFFFFF",
        rightsideHex: "FFFFFF",

        templates: [
          //Левая страница
          { id: 0, title: "leftside", template: {} },
          //Правая страница
          { id: 1, title: "rightside", template: {} },
          //Разворот
          { id: 2, title: "centerside", template: {} },
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
        ...current(state.pages.papers.pages[state.pages.papers.selectedPage]),
      };
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
            state.pages.templates[pageType].templates.rightside[tmplId]
          );

          break;
        case "centerside":
          neededTemplate = current(
            state.pages.templates[pageType].templates.centerside[tmplId]
          );

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
            return { ...tmpl, template: neededTemplate };
          } else if (tmpl.title === "rightside") {
            return { ...tmpl };
          } else {
            return { ...tmpl, template: {} };
          }
        });
      } else if (sideToChange === "rightside") {
        newTemplates = [...templates].map((tmpl) => {
          if (tmpl.title === "rightside") {
            return { ...tmpl, template: neededTemplate };
          } else if (tmpl.title === "leftside") {
            return { ...tmpl };
          } else {
            return { ...tmpl, template: {} };
          }
        });
      } else {
        newTemplates = [...templates].map((tmpl) => {
          if (tmpl.title === "centerside") {
            return { ...tmpl, template: neededTemplate };
          } else {
            return { ...tmpl, template: {} };
          }
        });
      }

      selectedPage.templates = newTemplates;
      state.pages.papers.pages[state.pages.papers.selectedPage] = selectedPage;
    },
    // добавить фото в элемент шаблона
    handleSetImageToTemplateElement(state, action) {
      const { imageId, tmplElementId, sideToChange } = action.payload;

      let selectedPage = {
        ...current(state.pages.papers.pages[state.pages.papers.selectedPage]),
      };
      // ищем картинку
      let neededImageObj = {};
      [...current(state.pages.uploads)].forEach((upload) => {
        if (upload.id === imageId) {
          neededImageObj = upload;
        }
      });

      let templatesOfSelectedPage = [...selectedPage.templates];
      let sideIdx;
      if (sideToChange === "leftside") {
        sideIdx = 0;
      } else if (sideToChange === "rightside") {
        sideIdx = 1;
      } else {
        sideIdx = 2;
      }

      let template = { ...templatesOfSelectedPage[sideIdx] };
      let tmplTemplate = { ...template.template };
      let tmplElements = [...tmplTemplate.elements];
      let tmplNewElements = tmplElements.map((elem) => {
        if (elem.id === tmplElementId) {
          return { ...elem, image: neededImageObj };
        } else {
          return { ...elem };
        }
      });
      tmplTemplate.elements = tmplNewElements;
      template.template = tmplTemplate;
      let newTemplates = templatesOfSelectedPage.map((templ) => {
        if (templ.title === sideToChange) {
          return { ...template };
        } else {
          return { ...templ };
        }
      });
      selectedPage.templates = newTemplates;
      state.pages.papers.pages[state.pages.papers.selectedPage] = selectedPage;
    },
    //Удалить фото из элемента шаблона
    handleDeleteImageFromElementTemplate(state, action) {
      const { pageId, sideToChange, tmplElementId } = action.payload;

      let selectedPage = {
        ...current(state.pages.papers.pages[pageId]),
      };
      let templatesOfSelectedPage = [...selectedPage.templates];
      let sideIdx;
      if (sideToChange === "leftside") {
        sideIdx = 0;
      } else if (sideToChange === "rightside") {
        sideIdx = 1;
      } else {
        sideIdx = 2;
      }
      let template = { ...templatesOfSelectedPage[sideIdx] };
      let tmplTemplate = { ...template.template };
      let tmplElements = [...tmplTemplate.elements];

      let tmplNewElements = tmplElements.map((elem) => {
        if (elem.id === tmplElementId) {
          let prevElem = { ...elem };
          delete prevElem["image"];
          return { ...prevElem };
        } else {
          return { ...elem };
        }
      });
      tmplTemplate.elements = tmplNewElements;
      template.template = tmplTemplate;
      let newTemplates = templatesOfSelectedPage.map((templ) => {
        if (templ.title === sideToChange) {
          return { ...template };
        } else {
          return { ...templ };
        }
      });
      selectedPage.templates = newTemplates;
      state.pages.papers.pages[pageId] = selectedPage;
    },
    //Добавить валидность страниц (заказать)-(Just frontend)
    handleSetTemplatesValidsPage(state, action) {
      const pagesTemplateValids = action.payload;
      state.pagesValid = pagesTemplateValids;
    },
    //UPDATE TO DEFAULT
    handleReloadConstructorConfig(state) {
      state.albumsId = contsructorDefaultState.albumsId;
      state.constructorLoading = contsructorDefaultState.constructorLoading;
      state.cover = contsructorDefaultState.cover;
      state.header_content = contsructorDefaultState.header_content;
      state.newAlbumLoading = contsructorDefaultState.newAlbumLoading;
      state.pages = contsructorDefaultState.pages;
      state.pagesValid = contsructorDefaultState.pagesValid;
      state.size = contsructorDefaultState.size;
    },
  },
  extraReducers: {
    //Получить все id альбомов
    [getAlbumIDS.fulfilled.type]: (state, action) => {
      state.albumsId.isLoading = false;
      state.albumsId.ids = action.payload;
    },
    [getAlbumIDS.pending.type]: (state) => {
      state.albumsId.isLoading = true;
    },
    [getAlbumIDS.rejected.type]: (state) => {
      state.albumsId.isLoading = false;
    },
    //Удаление альбома по id
    [deleteAlbumById.fulfilled.type]: (state, action) => {
      state.albumsId.isLoading = false;
      let prevIds = [...state.albumsId.ids];
      let newIds = prevIds.filter((id) => id.id !== action.payload);
      state.albumsId.ids = newIds;
    },
    [deleteAlbumById.pending.type]: (state) => {
      state.albumsId.isLoading = true;
    },
    [deleteAlbumById.rejected.type]: (state) => {
      state.albumsId.isLoading = false;
    },
    //Создание альбома
    [newAlbum.fulfilled.type]: (state) => {
      state.newAlbumLoading = false;
    },
    [newAlbum.pending.type]: (state) => {
      state.newAlbumLoading = true;
    },
    [newAlbum.rejected.type]: (state) => {
      state.newAlbumLoading = false;
    },
    //Получение альбома по id
    [getAlbumById.fulfilled.type]: (state, action) => {
      state.constructorLoading = false;
      if (action.payload.data) {
        let { data, images } = action.payload;
        let { mainData, coverData, pagesData } = data;
        //MAIN
        state.header_content.albumId = mainData.albumId;
        state.header_content.albumName = mainData.albumName;
        state.header_content.price = mainData.price;
        state.header_content.step = mainData.step;
        state.size.scale = mainData.scale;
        state.size.selectedType = mainData.selectedType;
        state.size.types[0].selectedSize = mainData.selectedQuadraticSize;
        state.size.types[1].selectedSize = mainData.selectedLandscapeSize;
        state.header_content.coverPreviewImage = String(
          BASE_URL + images.cover_preview
        );

        //COVER
        state.cover.selectedType = coverData.coverSelectedType;
        //ecoLeather
        let { ecoLeather, photoCover, textile } = coverData;
        state.cover.types[0].selectedColor = ecoLeather.ecoLeatherSelectedColor;
        state.cover.types[0].selectedDecor = ecoLeather.ecoLeatherSelectedDecor;

        state.cover.types[0].features.decor[0].options[0].selectedColor =
          ecoLeather.ecoLeatherLetteringColor;
        state.cover.types[0].features.decor[0].options[1].selectedDesign =
          ecoLeather.ecoLeatherLetteringDesign;
        state.cover.types[0].features.decor[1].selectedSize =
          ecoLeather.ecoLeatherPhotoBidSize;
        // photobid image
        if (images.eco_photobid) {
          state.cover.types[0].features.decor[1].blobImage = String(
            BASE_URL + images.eco_photobid
          );
        }

        state.cover.types[0].features.decor[2].options[0].selectedColor =
          ecoLeather.ecoLeatherMetalPlateColor;
        state.cover.types[0].features.decor[2].options[1].selectedSize =
          ecoLeather.ecoLeatherMetalPlateSize;
        state.cover.types[0].features.decor[2].options[2].selectedDecoration =
          ecoLeather.ecoLeatherMetalPlateDecoration;
        state.cover.types[0].features.decor[2].options[2].decors[0].selectedEngrave =
          ecoLeather.ecoLeatherMetalPlateEngrave;
        state.cover.types[0].features.decor[2].options[2].decors[1].selectedSize =
          ecoLeather.ecoLeatherMetalPlateTextSize;
        state.cover.types[0].features.decor[2].options[2].decors[1].selectedFont =
          ecoLeather.ecoLeatherMetalPlateTextFont;
        state.cover.types[0].features.decor[2].options[2].decors[1].typedText =
          ecoLeather.ecoLeatherMetalPlateText;

        //textile
        state.cover.types[1].selectedColor = textile.textileSelectedColor;
        state.cover.types[1].selectedDecor = textile.textileSelectedDecor;

        state.cover.types[1].features.decor[0].options[0].selectedColor =
          textile.textileLetteringColor;
        state.cover.types[1].features.decor[0].options[1].selectedDesign =
          textile.textileLetteringDesign;
        state.cover.types[1].features.decor[1].selectedSize =
          textile.textilePhotoBidSize;
        //photobid image
        if (images.textile_photobid) {
          state.cover.types[1].features.decor[1].blobImage = String(
            BASE_URL + images.textile_photobid
          );
        }

        state.cover.types[1].features.decor[2].options[0].selectedColor =
          textile.textileMetalPlateColor;
        state.cover.types[1].features.decor[2].options[1].selectedSize =
          textile.textileMetalPlateSize;
        state.cover.types[1].features.decor[2].options[2].selectedDecoration =
          textile.textileMetalPlateDecoration;
        state.cover.types[1].features.decor[2].options[2].decors[0].selectedEngrave =
          textile.textileMetalPlateEngrave;
        state.cover.types[1].features.decor[2].options[2].decors[1].selectedSize =
          textile.textileMetalPlateTextSize;
        state.cover.types[1].features.decor[2].options[2].decors[1].selectedFont =
          textile.textileMetalPlateTextFont;
        state.cover.types[1].features.decor[2].options[2].decors[1].typedText =
          textile.textileMetalPlateText;
        //photoCover
        state.cover.types[2].selectedType = photoCover.photoCoverSelectedType;
        state.cover.types[2].selectedColor = photoCover.photoCoverColor;
        if (images.photocover) {
          state.cover.types[2].blobImage = String(BASE_URL + images.photocover);
        }
        //PAGES
        state.pages.papers.selectedPage = 0;
        state.pages.papers.pages = pagesData.pages;
        state.pages.selectedType = pagesData.selectedType;
        let uploadImages = [];
        for (let imageKey in images) {
          if (
            imageKey !== "textile_photobid" &&
            imageKey !== "photocover" &&
            imageKey !== "eco_photobid" &&
            imageKey !== "cover_preview"
          ) {
            let id = imageKey.split("/")[2];
            let fullOptions = imageKey.split("/")[1];
            let splitOptions = fullOptions.split("-");
            let imageWidth = splitOptions[0];
            let imageHeight = splitOptions[1];
            let newImg = {
              blob: `${BASE_URL}${images[imageKey]}`,
              id,
              imageWidth,
              imageHeight,
            };
            uploadImages.push(newImg);
          }
        }
        let allPages = [...state.pages.papers.pages];
        let needToChangeArray = [];
        for (let i = 0; i < allPages.length; i++) {
          for (let j = 0; j < allPages[i].templates.length; j++) {
            if (Object.keys(allPages[i].templates[j].template).length !== 0) {
              for (
                let k = 0;
                k < allPages[i].templates[j].template.elements.length;
                k++
              ) {
                if (allPages[i].templates[j].template.elements[k].image) {
                  if (
                    Object.keys(
                      allPages[i].templates[j].template.elements[k].image
                    ).length !== 0
                  ) {
                    uploadImages.some((upload, idx) => {
                      if (
                        upload.id ===
                        allPages[i].templates[j].template.elements[k].image.id
                      ) {
                        let objectToChange = {
                          pagesIdx: i,
                          templatesIdx: j,
                          elementsIdx: k,
                          blob: upload.blob,
                        };
                        needToChangeArray.push(objectToChange);
                      }
                    });
                  }
                }
              }
            }
          }
        }
        for (let i = 0; i < needToChangeArray.length; i++) {
          state.pages.papers.pages[needToChangeArray[i].pagesIdx].templates[
            needToChangeArray[i].templatesIdx
          ].template.elements[needToChangeArray[i].elementsIdx].image.blob =
            needToChangeArray[i].blob;
        }

        state.pages.uploads = uploadImages;
      }
    },
    [getAlbumById.pending.type]: (state) => {
      state.constructorLoading = true;
    },
    [getAlbumById.rejected.type]: (state, action) => {
      state.constructorLoading = false;
    },
  },
});
export const {
  handleChangeSizeType,
  handleChangeSizeOf,
  handleIncrementStep,
  handleDecrementStep,
  setAlbumId,
  setStageURI,
  handleChangePrice,
  handleChangeScale,
  handleChangeAlbumName,
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
  handleSetColorToSidePage,
  handleSetImageToTemplateElement,
  handleChangeBookName,
  handleIncrementNavigation,
  handleChangeDataPhone,
  handleSetTemplatesValidsPage,
  handleDeleteImageFromElementTemplate,
  handleReloadConstructorConfig,
} = constructorSlice.actions;
export default constructorSlice.reducer;
