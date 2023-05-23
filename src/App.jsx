import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TestCard from "./components/listTemplate/testCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Main from "./layout/Main";
import Home, { homeAction } from "./pages/Home"



// const recipe = {
//   title: 'meatballs in tomato sauce',
//   subheader: 'albondigas',
//   intro: ` Albondigas are one of the classic taps dishes and most deserving of their popularity. You can choose to serve these meatballs with alioli and lemon rather than the tomato sauce — this is a common Spanish variation. The meatballs reheat well.`,
//   serves:`4`,
//   ingredients: [
//     "150 g/6 oz, minced/ground pork", 
//     "150 g/6 oz, minced/ground veal",
//     "1 teaspoon freshly squeezed lemon juice",
//     "1/2 small onion, finely chopped",
//     "2 garlic cloves, crushed",
//     "1/2 teaspoons freshly grated nugmet",
//     "1/2 teaspoon ground cloves",
//     "30 g/1/4 cup dried breadcrumbs",
//     "1 egg",
//     "1 tablespoon single/light cream",
//     "plain/all-purpose olive oil",
//     "sea salt and greshly ground white pepper"
//   ],
//   steps:[
//     "1. To make the meatballs, put the pork and veal in a bowl; then add lemon juice, onion, garlic, parsley, nutmeg, cloves, breadcrumbs, egg, cream, salt and pepper. Mix well.",
//     "2. Roll the mixure into walnut-sized balls. Dust with flour.",
//     "3. Heat the oil in a flameproof casserole until smoking. Add the meatballs and saute until browned on all sides.",
//     "4. Reduce the heat to low. Add the wine, tomatoes, onion, garlic, paprika, bay leaf and 100 ml water. Cover and simmer for 1 hour.",
//     "5. The mixture should be quite liquid. So add extra water if necessary."
//   ],
//   img: './src/assets/meatball.jpeg',
//   labels: ["MEAT", "POULTRY"],
//   "meal":"Breakfast",
//   "category":"中式点心"
// }

// const zhRecipe = {
//   "title": "原味贝果",
//         "subheader": "Bagels",
//         "intro": "住在纽约的时候, 从没想到有一天会自己做 Bagel, 因为那里满大街的经典和创意Bagel. 我最爱的两种bagel搭配: 一定是 Brooklyn Bagel Company 的cinnamon raisin bagel 配上 walnut cream cheese 和 Pick A Bagel家的 Pumpernickle Bagel 配上scallion cream cheese 和 smoked salmon. 搬离纽约后, 才发现真的很难找到外表酥脆厚实, 内里嚼劲十足的 bagel, 于是找了各种配方, 尝试了很多版本, 终于做出了口感类似的bagel. 这是一个历时 3 天的工程, 所以每次都会直接做 10 个, 然后把多余的切开冻起来. 每次打开冷冻, 看到满满一袋 Bagel的时候, 就会感觉自己简直就是一个富翁.",
//         "serves": 10,
//         "instructions":[
//           {
//             "ingredients":[""],
//             "step":["第一天晚上: 准备烫种和波兰种"]
//           },
//           {
//             "ingredients":[
//               "120g 全麦面包粉",
//             "140g 沸水"
//           ],
//             "step":["1. 烫种: 一个不怕烫适合放在冰箱里面的容器, 全麦面包粉和沸水混合搅匀, 冷却后放冰箱冷藏一夜"]
//           },
//           {
//             "ingredients":[
//               "120g 普通面粉",
//               "120g 常温水",
//               "2g 干酵母"
//             ],
//             "step":["2. 波兰种: 准备一个高一点的容器, 加入面粉, 酵母和水混合后, 室温发酵大概4 - 5个小时, 放冰箱冷藏一夜"]
//           },
//           {
//             "ingredients":[
              
//             ],
//             "step":["第二天: 揉面, 发酵, 塑形"]
//           },
//           {
//             "ingredients":[
//               "360g 面包粉",
//               "15g 红糖",
//               "15g 白糖",
//               "10g 盐",
//               "100g 水",
//               "2g 酵母",
//               "烫种",
//               "波兰种"
//             ],
//             "step":[
//               "1. 把所有材料加上头一天晚上的烫种和波兰种搅拌均匀, 揉面 15 分钟左右, 揉出粗膜即可; 温暖的地方醒发 40min 左右, 大概发到 1.5 倍大.",
//               "2. 塑形: 醒发好的面团, 揉搓排气后, 均匀分成大概100g一个的小面团, 盖上布再醒 5 分钟, 松弛一下面团; 把小面团揉搓排气后, 开始塑形: 市面上有很多塑形方法, 找一个自己喜欢的方式, 把小面团塑形成 bagel 的样子, 为每个 bagel 下面垫上剪裁得大小适合的方形烘焙纸, 方便明天的煮贝果操作.",
//               "3. 二发: 温暖的地方或者烤箱 30°C, 发酵 30 分钟即可; 装进盘子里, 放到冰箱里冷藏过夜."

//             ]
//           },
         
//           {
//             "ingredients":[],
//             "step":["第三天: 煮 bagel, 烘烤"]
//           },
//           {
//             "ingredients":[],
//             "step":["1. 烤箱预热: 230°C, 10 分钟"]
//           },
//           {
//             "ingredients":[
//               "2g 小苏打",
//               "10g 红糖",
//               "2L 水"
//             ],
//             "step":["2. 煮 bagel: 每 1L 水中, 放 1g小苏打, 5g红糖; 我这里用了 2L 水, 加入对应量的小苏打和红糖后, 煮沸调小火, 放入 bagel, 每面 30s, 捞出沥干表面水, 放入烤盘. "]
//           },
//           {
//             "ingredients":[],
//             "step":["3. 烘烤: 烤箱 230°C, 上下火烤 15min"]
//           },
//           {
//             "ingredients":[],
//             "step":["4. 这份配量一次可以做 10 个, 多余吃不了的可以对半切开, 放入冷冻, 需要的时候拿出直接烘烤. 配上cream cheese和一杯热咖啡, 也能能量满满的开启一天."]
//           },

//         ],
//         "ingredients": [
//           "250g 面粉",
//           "4g 泡打粉",
//           "2g 小苏打",
//           "80g 白砂糖",
//           "120g 食用油(50g 黄油 + 70g 花生仁油)",
//           "1颗 鸡蛋",
//           "50g 核桃仁",
//           "少量 黑芝麻(装饰)"
//         ],
//         "steps":[
//           "1. 处理核桃仁: 核桃仁切碎, 放入烤箱, 150°C, 5 分钟, 放凉备用",
//           "2. 在一个大碗里, 放入干料(面粉, 泡打粉, 小苏打), 混合均匀",
//           "3. 另取一个碗, 放入融化的黄油, 花生油, 打入鸡蛋, 搅拌至发白乳化; 搅拌过程中, 分几次放入白砂糖, 搅拌均匀",
//           "4. 在干料中间, 挖一个洞, 倒入搅拌好的蛋油混合液, 混合搅拌成团(成团即可, 不要过度揉搓面团); 拌入烤好放凉的核桃仁, 搅拌均匀.",
//           "5. 烤箱 180 °C, 预热 10 分钟. 预热期间, 将面团分成大小均匀的 20 分, 揉成球再压扁放到烤盘上. 摆好之后, 中间撒点黑芝麻点缀.",
//           "6. 放入烤箱, 180 °C 20分钟(或根据自己烤箱脾气, 上色即可). ",
//           "7. 取出放凉, 核桃酥做好了. 配上一杯牛奶, 酥脆可口."
//         ],
//         "img": "./src/assets/bagel-detail-big.jpg",
//         "coverImg": "./src/assets/bagel-detail-small.jpg",
//         "labels": ["烘焙","减脂"],
//         "cal":"229",
//         "sign":"陈沙拉",
//         "meal":"Breakfast",
//         "category":"烘焙"
// }

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
        element: <TestCard />
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
