<template>
  <div>
    <div class="tools">
      <el-button @click="clickCreate">新建博客</el-button>
      <el-input v-model="keywords" class="pd-20"></el-input>
      <el-button @click="searchBlog" class="pd-20">搜索</el-button>
      <el-button @click="research">重置</el-button>
    </div>
    <div class="table">
      <el-table :data="blogList" style="width: 100%" :fit="true">
        <el-table-column prop="title" label="博客标题"></el-table-column>
        <el-table-column prop="content" label="博客内容"></el-table-column>
        <el-table-column prop="createtime" label="创建时间"></el-table-column>
        <el-table-column label="操作" width="180">
          <template #default="{ row }">
            <el-button type="primary" @click="clickEdit(row)">编辑</el-button>
            <el-button type="danger" @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="dialogVisible" title="编辑" width="30%">
      <el-form ref="form" :model="formData" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input
            v-model="formData.title"
            placeholder="请输入标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input
            v-model="formData.content"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">提 交</el-button>
      </span>
    </el-dialog>

    <el-dialog v-model="visible" title="新建" width="30%">
      <el-form ref="form" :model="createData" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input
            v-model="createData.title"
            placeholder="请输入标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input
            v-model="createData.content"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="subCreate">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import hyRequest from '../request' as any;

interface Blog {
  id: number;
  title: string;
  content?: string;
  createtime?: string;
  author?: string;
}

const dialogVisible = ref(false);
const visible = ref(false);
const keywords = ref('');
const formData = ref({
  id: '',
  title: '',
  content: '',
});

const createData = ref({
  title: '',
  content: '',
});

const blogList = ref<Blog[]>([]);

const getBlogList = (keyword) => {
  if (!keyword) {
    return hyRequest.get({
      url: '/blog/list?isadmin=1',
    });
  }

  return hyRequest.get({
    url: `/blog/list?isadmin=1&keyword=${keyword}`,
  });
};

const reloadTabe = (keyword) => {
  getBlogList(keyword).then((res) => {
    blogList.value = res.data;
  });
};

const delBlog = (id) => {
  return hyRequest.post({
    url: `/blog/del?id=${id}`,
  });
};
const clickEdit = (row: Blog) => {
  formData.value.id = row.id;
  formData.value.title = row.title;
  formData.value.content = row.content;

  dialogVisible.value = true;
};

const handleDelete = (row: Blog) => {
  delBlog(row.id).then(() => {
    console.log('删除成功');
    reloadTabe();
  });
};

const handleEdit = (id) => {
  return hyRequest.post({
    url: `/blog/update?id=${id}`,
    data: formData.value,
  });
};

const handleCreate = () => {
  return hyRequest.post({
    url: '/blog/new',
    data: createData.value,
  });
};

const submitForm = () => {
  // 在这里可以处理提交逻辑，formData 中包含表单数据
  console.log('提交的表单数据:', formData.value);
  handleEdit(formData.value.id).then((res) => {
    console.log(res);
    reloadTabe();
  });
  dialogVisible.value = false;
};

const clickCreate = () => {
  visible.value = true;
};
const subCreate = () => {
  handleCreate().then(() => {
    reloadTabe();
    visible.value = false;
  });
};

const searchBlog = () => {
  reloadTabe(keywords.value);
};

const research = () => {
  keywords.value = '';
  reloadTabe();
};

onMounted(() => {
  reloadTabe();
});
</script>
<style lang="scss" scoped>
/* 可以添加样式来自定义表格的外观 */
.dialog-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tools {
  display: flex;
  padding: 20px;
  margin-right: 60%;
}

.table {
  padding: 20px;
}

.pd-20 {
  padding: 0 20px;
}
</style>
