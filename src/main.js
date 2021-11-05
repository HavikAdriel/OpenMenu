import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'

//vant组件
import { Button,Form, Field, CellGroup,Tabbar, TabbarItem } from 'vant';
import { Col, Row,Notify,Dialog,RadioGroup, Radio,NavBar,Search,Tag,TreeSelect } from 'vant';
import {Uploader,Icon,Swipe, SwipeItem} from 'vant'
import {Image as VanImage,List,Cell,Divider,SwipeCell,Card,Popover,Sidebar, SidebarItem,Toast,Grid, GridItem} from 'vant'

//axios
import axios from "axios";

const app=createApp(App);

//vant使用
app.use(store).use(router).mount('#app');
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Col);
app.use(Row);
app.use(Notify);
app.use(Dialog);
app.use(Radio);
app.use(RadioGroup);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Search);
app.use(Tag);
app.use(TreeSelect);
app.use(Uploader);
app.use(Icon);
app.use(Swipe);
app.use(SwipeItem);
app.use(VanImage);
app.use(List);
app.use(Cell);
app.use(Divider);
app.use(SwipeCell);
app.use(Card);
app.use(Popover);
app.use(Sidebar);
app.use(SidebarItem);
app.use(Toast);
app.use(Grid);
app.use(GridItem);
//全局vant函数
app.config.globalProperties.$Dialog = Dialog
app.config.globalProperties.$Notify = Notify
app.config.globalProperties.$Toast = Toast

//axios
app.config.globalProperties.$axios = axios