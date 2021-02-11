<template>
    <div class="tweet-item" @click="mfavoriteTweet(tweet.id)">
        <div class="tweet">
            <div class="user">
                <strong> @{{ username }} </strong>
            </div>
            <div class="tweet-content">
                {{ tweet.content }}
            </div>
        </div>
    </div>
</template>

<script>
import { } from 'vue';
export default {
    name: "TweetItem",
    props: {
        username: {
            type: String,
            required: true,
        },
        tweet: {
            type: Object,
            required: true,
        }
    },
    setup(props, ctx){
        //###
        function mfavoriteTweet(id){
            ctx.emit('toggle-favorite', id);
        }

        return {
            mfavoriteTweet,
        }
    }
    // methods: {
    //     mfavoriteTweet(id){
    //         this.$emit('toggle-favorite', id);
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.tweet-item{
    display: flex;
    margin:10px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover{
        transform: scale(1.02, 1.02);
    }
}

</style>