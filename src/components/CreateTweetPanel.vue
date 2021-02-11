<template>
    <form class="create-tweet-form" @submit.prevent="createNewTweet">
        <label for="new-tweet">
            <strong>New Tweet</strong> ({{newTweetCharCount}})
        </label>
        <textarea id="new-tweet"  rows="4" v-model="state.tweetContent"></textarea>

        <div class="create-tweet-type">
            <label for="newTweetType">Type</label>
            <select id="newTweetType" v-model="state.selectedTweetType">
                <option v-for="(type, index) in state.tweetTypes" :key="index" :value="type.value">
                    {{ type.name }}
                </option>
            </select>
        </div>
        <button>Tweet</button>
    </form>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    name: "CreateTweetPanel",
    setup(props, ctx){
        //###
        const state = reactive({
            tweetTypes: [
                {value: "draft", name: "Draft"},
                {value: "instant", name: "Instant"},
            ],
            tweetContent: "",
            selectedTweetType: "draft",
        });

        //###
        const newTweetCharCount = computed( () => state.tweetContent.length )

        //###
        function createNewTweet(){
            ctx.emit('add-tweet', state.tweetContent);
            state.tweetContent = '';
        }

        return {
            state,
            newTweetCharCount,
            createNewTweet,
        }
    },
    // methods: {
    //     createNewTweet(){   //function called above submit
    //         // console.log("content is: " + this.tweetContent);
    //         // console.log("type selected: " + this.selectedTweetType);
    //         this.$emit('add-tweet', this.tweetContent);
    //         this.tweetContent = '';
    //         // this.user.tweets.unshift(
    //         //     {
    //         //         id: this.user.tweets.length +1,
    //         //         content: this.tweetContent
    //         //     }
    //         // )
    //     }
    // }
}
</script>

<style lang="scss" scoped>

.create-tweet-form{
    margin-top:10px;
    display: flex;
    flex-direction: column;
}

</style>