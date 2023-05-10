import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RecipeReviewCard2 from "./components/RecipeCard2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Main from "./layout/Main";
import Home, { homeAction } from "./pages/Home"



const recipe = {
  title: 'meatballs in tomato sauce',
  subheader: 'albondigas',
  intro: ` Albondigas are one of the classic taps dishes and most deserving of their popularity. You can choose to serve these meatballs with alioli and lemon rather than the tomato sauce — this is a common Spanish variation. The meatballs reheat well.`,
  serves:`4`,
  ingredients: [
    "150 g/6 oz, minced/ground pork", 
    "150 g/6 oz, minced/ground veal",
    "1 teaspoon freshly squeezed lemon juice",
    "1/2 small onion, finely chopped",
    "2 garlic cloves, crushed",
    "1/2 teaspoons freshly grated nugmet",
    "1/2 teaspoon ground cloves",
    "30 g/1/4 cup dried breadcrumbs",
    "1 egg",
    "1 tablespoon single/light cream",
    "plain/all-purpose olive oil",
    "sea salt and greshly ground white pepper"
  ],
  steps:[
    "1. To make the meatballs, put the pork and veal in a bowl; then add lemon juice, onion, garlic, parsley, nutmeg, cloves, breadcrumbs, egg, cream, salt and pepper. Mix well.",
    "2. Roll the mixure into walnut-sized balls. Dust with flour.",
    "3. Heat the oil in a flameproof casserole until smoking. Add the meatballs and saute until browned on all sides.",
    "4. Reduce the heat to low. Add the wine, tomatoes, onion, garlic, paprika, bay leaf and 100 ml water. Cover and simmer for 1 hour.",
    "5. The mixture should be quite liquid. So add extra water if necessary."
  ],
  img: './src/assets/meatball.jpeg',
  labels: ["MEAT", "POULTRY"],
  "meal":"Breakfast",
  "category":"中式点心"
}

const zhRecipe = {
  "title": "核桃酥",
        "subheader": " Walnut Biscuit",
        "intro": " 核桃酥, 一种酥酥脆脆的大饼干, 一口下去掉一地的渣. 东北街边点心店买一斤送一斤的大糕点, 姥姥曾经的泡奶点心(后来她又有了许多配奶新宠). 老妈一直想试试自己复刻, 我就一直想知道核桃酥里面到底有没有核桃.",
        "serves": 20,
        "ingredients": [
          "250g 面粉",
          "4g 泡打粉",
          "2g 小苏打",
          "80g 白砂糖",
          "120g 食用油(50g 黄油 + 70g 花生仁油)",
          "1颗 鸡蛋",
          "50g 核桃仁",
          "少量 黑芝麻(装饰)"
        ],
        "steps":[
          "1. 处理核桃仁: 核桃仁切碎, 放入烤箱, 150°C, 5 分钟, 放凉备用",
          "2. 在一个大碗里, 放入干料(面粉, 泡打粉, 小苏打), 混合均匀",
          "3. 另取一个碗, 放入融化的黄油, 花生油, 打入鸡蛋, 搅拌至发白乳化; 搅拌过程中, 分几次放入白砂糖, 搅拌均匀",
          "4. 在干料中间, 挖一个洞, 倒入搅拌好的蛋油混合液, 混合搅拌成团(成团即可, 不要过度揉搓面团); 拌入烤好放凉的核桃仁, 搅拌均匀.",
          "5. 烤箱 180 °C, 预热 10 分钟. 预热期间, 将面团分成大小均匀的 20 分, 揉成球再压扁放到烤盘上. 摆好之后, 中间撒点黑芝麻点缀.",
          "6. 放入烤箱, 180 °C 20分钟(或根据自己烤箱脾气, 上色即可). ",
          "7. 取出放凉, 核桃酥做好了. 配上一杯牛奶, 酥脆可口."
        ],
        "img": "./src/assets/walnut-biscuit.jpg",
        "labels": ["中式点心"],
        "cal":"1250",
        "sign":"陈沙拉",
        "meal":"Breakfast",
        "category":"中式点心"
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Main/>,
    children: [
      {
        index: true,
        action: homeAction,
        element: <Home/>
      },
      {
        path:'card',
        element: <RecipeReviewCard2 data={zhRecipe}/>
      }
    ]
  }
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
      <ToastContainer/>

    </div>
  )
}

export default App
