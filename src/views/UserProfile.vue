<template>
    <div class="user-profile">
        <div class="user-panel">
            <h1> {{ fullName }}</h1>
            <p>[{{ userId }}] (@{{ state.user.username }}) </p>
            <div class="badge" v-if="state.user.isAdmin">Admin</div>
            <div class="follower-count">
                <strong>Followers: </strong> {{ followers }}
            </div>

            <create-tweet-panel @add-tweet="addNewTweet"/>
        </div>
        
        <div class="tweets-wrapper">
            <tweet-item v-for="tweet in state.user.tweets" :key="tweet.id" :username="state.user.username" :tweet="tweet" @toggle-favorite="toggleFavorite"/>
    </div>


    </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';

import TweetItem from '../components/TweetItem';
import CreateTweetPanel from '../components/CreateTweetPanel.vue';

import { users } from '@/assets/users.js';

export default {
    name: "UserProfile",
    components: {
        TweetItem,
        CreateTweetPanel,
    }, 
    setup(){
        //###
        const route = useRoute();
        const userId = computed( ()=> route.params.userId );

        //###
        const state = reactive({
            followers: 0,
            user: users[userId.value-1] || null
        });

        //###
        const fullName = computed(() => `${state.user.firstName} ${state.user.lastName}`);

        //###
        function toggleFavorite(id){ 
            console.log("Toggle with id " + id);
        }

        //###
        function addNewTweet(content){
            state.user.tweets.unshift(
                {
                    id: state.user.tweets.length +1,
                    content: content,
                }
            )
        }

        return {
            userId,
            state,
            fullName,
            toggleFavorite,
            addNewTweet,
        };
    }
    // data(){
    //     return {
    //         followers: 0,
    //         user: {
    //             id: 1,
    //             username: "vandyke1906",
    //             firstName: "Ronie",
    //             lastName: "Penara",
    //             email: "admin@email.com",
    //             isAdmin: true,
    //             tweets: [
    //                 { id: 1, content: "content one is here"},
    //                 { id: 2, content: "content two is here"},
    //                 { id: 3, content: "content three is here"},
    //                 { id: 4, content: "content four is here"},
    //                 { id: 5, content: "content five is here"},
    //             ]
    //         }

    //     }
    // },
    // computed: {
    //     fullName(){
    //         return `${this.user.firstName} ${this.user.lastName}`;
    //     }
    // },
    // methods: {
    //     toggleFavorite(id){
    //         console.log("Toggle with id " + id);
    //     },
    //     addNewTweet(content){
    //         this.user.tweets.unshift(
    //             {
    //                 id: this.user.tweets.length +1,
    //                 content: content,
    //             }
    //         )
    //     }
    //     // createNewTweet(){
    //     //     console.log("content is: " + this.tweetContent);
    //     //     console.log("type selected: " + this.selectedTweetType);
    //     //     this.user.tweets.unshift(
    //     //         {
    //     //             id: this.user.tweets.length +1,
    //     //             content: this.tweetContent
    //     //         }
    //     //     )
    //     // }
    // }

}
</script>

<style lang="scss" scoped>
    
    .user-profile{
        display: grid;
        text-align: start;
        grid-template-columns: 1fr 3fr;
        grid-gap: 50px;
        padding: 50px 5%;


    .user-panel{
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 20px;
        background: #ffffff;
        border-radius: 5px;
        border: 1px solid #cccccc;
    }

    h1{
        margin: 0;
    }

    .tweets-wrapper{
        display: grid;
        grid-gap: 10px;
        padding:10px;
    }

    .badge{
        padding: 5px;
        background-color: darkorange;
    }

    // .create-tweet-form{
    //     margin-top:10px;
    //     display: flex;
    //     flex-direction: column;
    // }


    }

</style>