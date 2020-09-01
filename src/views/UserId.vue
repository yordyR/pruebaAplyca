<template>
    <div> 
        <div class="" :class="{'bl-sidebar--hiden':ocultarMenu, 'bl-sidebar': !ocultarMenu}" >
           <Menu/>
        </div>
        <div class="" :class="{'bl-content-width': ocultarMenu, 'bl-content': !ocultarMenu}">
            <div class="bl-header">
                <div class="bl-header-toogle" @click="ocultarMenu = !ocultarMenu">
                <p class="m-0 text-left">
                    <span class="icon-toggles">
                        <i class="icon-toggle"></i> 
                        <i class="icon-toggle1"></i> 
                        <i class="icon-toggle2"></i> 
                    </span>
                    <span class="text-tituloDashboard"> Dashboard </span> 
                </p>
                </div>
                <div class="bl-header-avatar">
                    <p class="m-0">
                        <img src="../assets/catherine-frot.png" alt="usuario" class="img-avatar">
                        <span class="text-usuario">
                        Marlene Sasoneur
                        </span>
                    </p>
                </div>
            </div>
            <div class="bl-addUser">
                <div class="bl-block">
                <a href="" class="btn-add btn-azul">
                    <i class="icon-more"></i>
                     Add new user
                </a>
                </div>
            </div>

            <div class="bl-table">
                <div class="bl-titulo">
                <p class="text-left text-titulo">
                    Users
                </p>
                </div>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>User Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in listUsers" :key="user.id">
                                <td >
                                    {{ user.id }}
                                </td>
                                <td >
                                    {{ user.title }}
                                </td>
                                <td >
                                    {{ user.userId }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Menu from '../components/Menu.vue'

    export default {
        components:{
            Menu
        },
        data(){
            return{
                id: this.$route.params.id,
                listUsers: '',
                ocultarMenu: false
            }
        },
        methods: {
            async getTodoUserId (){
                let datos= await axios
                    .get('https://jsonplaceholder.typicode.com/todos?userId='+this.id)

                    console.log(datos.data)
                    this.listUsers = datos.data
            }

            
        },
        created() {
            this.getTodoUserId();
        },
        
    }
</script>