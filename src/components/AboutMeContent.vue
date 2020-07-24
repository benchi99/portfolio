<template>
  <div id="aboutMeContent" class="container">
        <div class="card-panel green z-depth-5" id="card">
            <p class="white-text flow-text">
                Hi, my name is Rubén Bermejo, I'm a {{ age }} year old <a :href="europassDamLink">Higher Technician in Multiplatform Application Development</a>.
            </p>

            <p class="white-text flow-text">
                I consider myself a person that is always happy and ready to learn new things, and a committed person when given a set of dates to deliver something.
            </p>

            <p class="white-text flow-text">
                I'm proficient with Java, Spring, writting unit tests, integration and acceptance tests; C# and the .NET framework; Python, the Django framework; SQL, database handling (specially with MySQL, and Oracle Database);
                native Android app development, and game development with Unity. I'm also used to work with version control systems such as Git, comfortable with any way of work, as well as used to work in Agile environments.
            </p>

            <p class="white-text flow-text">
                I'm also familiar, but to a lesser extent to Front-End technologies such as CSS, and CSS frameworks; Javascript, JQuery, AJAX; as well as React, and Vue.js; and other languages such as PHP.
            </p>

            <p class="white-text flow-text">
                My passion is Game Development, but I also just love programming and writting code, for anything I see that can be interesting and would be good to learn.
            </p>
        </div>
  </div>
</template>

<script>
export default {
    name: 'AboutMeContent',
    data: () => {
        return  {
            europassDamLink: 'http://todofp.es/dam/jcr:7655e32d-08a3-47a7-a479-ddb6f032c63e/tsdesarrolloaplicacionesmultiplataformaen-pdf.pdf'
        }
    },
    computed: {
        age: () => {
            let birth = new Date("March 3, 1999"), now = new Date();    // hah, now you know my birthday.
            let age = now.getFullYear() - birth.getFullYear();

            if (now.getMonth() < birth.getMonth() && now.getDay() < birth.getDay()) {
                return age - 1;
            } else {
                return age;
            }
        }
    }
}
</script>

<style>
    div#card > p > a {
        color: greenyellow;
    }

    div#card {
        border-radius: 20px;
        margin-top: 5em;
        margin-bottom: 5em;
    }

    div#card > p {
        padding: 5px;
        margin-right: 15px;
        margin-left: 15px;
    }
</style>