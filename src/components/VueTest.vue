<template>
    <div>
        <h1>{{ msg }}</h1>
        <br>
        <el-button type="success" @click="sendRequest">发送请求</el-button>
        <!-- 分割线 -->
        <el-divider></el-divider>

        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="accountType" label="账目类型"></el-table-column>

            <el-table-column prop="accountDesc" label="账目描述"></el-table-column>

            <el-table-column prop="accountMoney" label="账目金额"></el-table-column>

            <el-table-column prop="createTime" label="日期"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'VueTest',
    data() {
        return {
            msg: '开心记账本',
            tableData: [] //表格数据
        }
    },
    methods: {
        //加载列表数据
        loadTableData() {
            //发请求给后台
            this.$http.get("/getAllAccount", {}).then(response => {
                this.tableData = response.data.data;
                //打印数据在控制台
                console.log(this.tableData);
            });
        },

        sendRequest(){
            console.log("开始向后台发送请求......");
            //发请求给后台
            this.$http.get("/hello", {}).then(response => {
                //打印数据在控制台
                console.log("后台返回数据：");
                console.log(response);
            });
        },
    },

    //钩子函数(页面初始化时，钩子函数就会被执行)
    mounted() {
        this.loadTableData();
    }
}
</script>

<style scoped>
</style>