import {request} from "../utils/request"

//获取首页导航
export function listNav(){
  return {
    "errCode": 0,
    "errMsg": "查询成功~",
    "data": [{
      "_id": "63b9600be1a35c358c18483b",
      "classname": "浪漫主义",
      "icon": "https://s1.ax1x.com/2023/04/12/ppjGgzV.png"
    }, {
      "_id": "63b96087819ce84216575a3c",
      "classname": "巴洛克",
      "icon": "https://s1.ax1x.com/2023/04/12/ppjGcR0.png"
    }, {
      "_id": "63b9609c819ce84216575d11",
      "classname": "古典主义",
      "icon": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/cloudstorage/9fae671d-6508-4733-9cdb-de7ccf38810f.png"
    }, {
      "_id": "63b960abf5cf3a165a3cb9db",
      "classname": "主要乐器",
      "icon": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/cloudstorage/ae070e04-254e-46f7-865c-b36240cdba1c.png"
    }, {
      "_id": "63b960bb819ce8421657614a",
      "classname": "经典乐曲",
      "icon": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/cloudstorage/1ed98486-a0c2-462f-b176-1e05472a2faa.png"
    }, {
      "_id": "63b960ebf5cf3a165a3cc27f",
      "classname": "命名解析",
      "icon": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/cloudstorage/af85823f-4704-4a6b-86ff-965b6c73abdb.png"
    }, {
      "_id": "63b96101819ce84216576b1e",
      "classname": "音乐体裁",
      "icon": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/cloudstorage/a7fc5cfc-7457-46fa-b85f-b337a9ae3814.png"
    }, {
      "_id": "63b9611af5cf3a165a3cc88d",
      "classname": "鉴赏方式",
      "icon": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/cloudstorage/0401b2b8-8701-4421-9952-f0a896a8631a.png"
    }, {
      "_id": "63b9612af5cf3a165a3ccb43",
      "classname": "音乐资讯",
      "icon": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/cloudstorage/7e68b16f-840e-4cec-81d0-3c62058a822b.png"
    }],
    "timeCost": 28
  };
  // return request({
  //   url:"/nav/get",
  //   method:"POST"
  // })
}

//获取新闻列表
export function queryNews(data){
  return {
    "errCode": 0,
    "errMsg": "查询成功~",
    "data": [{
      "_id": "63c38e81e1a35ce43a2689e4",
      "title": "西班牙钢琴家马里奥来宁演奏：在中国，看到了古典音乐的未来",
      "is_essence": true,
      "author": "豪吃的美食",
      "publish_date": 1672486225000,
      "picurl": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/cloudstorage/0cf43f6a-ea0f-499b-a355-15a9e2486bfc.jpg"
    }, {
      "_id": "63c38cadf43e607808e6243e",
      "title": "西班牙钢琴家马里奥来宁演奏：在中国，看到了古典音乐的未来",
      "is_essence": true,
      "author": "海外网",
      "publish_date": 1672445597000,
      "picurl": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/cloudstorage/ae1ca356-3d90-4ac4-825d-53da55359e5c.jpg"
    }, {
      "_id": "63c38db1f43e607808e657c6",
      "title": "西班牙钢琴家马里奥来宁演奏：在中国，看到了古典音乐的未来",
      "is_essence": true,
      "author": "黑白茶文化",
      "publish_date": 1672390386000,
      "picurl": "https://mp-0cb878b7-99ec-44ea-8246-12b123304b05.cdn.bspapp.com/cloudstorage/a9a9d627-d660-42b6-9fd2-e68708916550.jpg"
    }],
    "total": 5,
    "timeCost": 69
  };
  return request({
    
    url:"/news/get",
    method:"POST",
    data
  })
}

//获取新闻详情
export function newsDetail(data){
  return request({
    url:"/news/detail",
    method:"POST",
    data
  })
}

//获取产品列表
export function queryProduct(data){
  return request({
    url:"/product/getlist",
    method:"POST",
    data
  })
}

