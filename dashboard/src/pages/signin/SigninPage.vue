<template>
    <BaseNavBar />
    <div class="signinContainer">
        <LoginForm />
				<LineCenter />
        <SignupForm />
    </div>
</template>

<script>

import BaseNavBar from "../../components/BaseNavBar.vue";
import LoginForm from "../../pages/signin/forms/LoginForm.vue"
import LineCenter from "../../components/LineCenter.vue"
import SignupForm from "../../pages/signin/forms/SignupForm.vue"

export default {
    name: "SigninPage",
    components: {
        BaseNavBar,
        LoginForm,
				LineCenter,
        SignupForm
    }
}
</script>

<style scoped>

.signinContainer {
	display: flex;
	justify-content: center;
}
</style>
