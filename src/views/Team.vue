<template>
  <div class="container">
    <div class="section-title">
        <h1>Our Team</h1>
    </div>
    <div class="row">
        <div class="column">
            <div class="team-1">
                <div class="team-img">
                    <img src="../assets/chintan.jpg" alt="Team Image">
                </div>
                <div class="team-content">
                    <h2>Chintan</h2>
                    <h3>Fullstack Developer</h3>
                    <h4>chintan.savaliya@quinbay.com</h4>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="team-1">
                <div class="team-img">
                    <img src="../assets/abhi.jpeg" alt="Team Image">
                </div>
                <div class="team-content">
                    <h2>Abhishek</h2>
                    <h3>Fullstack Developer</h3>
                    <h4>abhishek.valani@quinbay.com</h4>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="team-1">
                <div class="team-img">
                    <img src="../assets/manan.jpeg" alt="Team Image">
                </div>
                <div class="team-content">
                    <h2>Manan</h2>
                    <h3>Fullstack Developer</h3>
                    <h4>manan.patel@quinbay.com</h4>
                    <!-- <div class="team-social">
                        <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                        <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                        <a class="social-yt" href=""><i class="fab fa-youtube"></i></a>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team'
}
</script>

<style lang='scss' scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: 'Lato', sans-serif;
  color: #454545;
  font-weight: 300;
  background: #ffffff;
}
p {
  padding: 0;
  margin: 0 0 15px 0;
  color: #454545;
  font-weight: 300;
}
h1, h2, h3, h4, h5, h6 {
  padding: 0;
  margin: 0 0 15px 0;
  color: #333333;
  font-weight: 700;
}
h1 {
margin-top: 30px;
  font-weight: 900;
}
img {
  width: 100%;
  height: auto;
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}

.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-right: -15px;
    margin-left: -15px;
}

.column {
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}

@media (min-width: 576px) {
    .column {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 70%;
    }
}

@media (min-width: 768px) {
    .column {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 40.333333%;
    }
}

@media (min-width: 992px) {
    .column {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 30%;
    }
}

.section-title {
    width: 100%;
    text-align: center;
    padding: 45px 0 30px 0;
}

.section-title::after {
    position: absolute;
    content: "";
    width: 50px;
    height: 5px;
    left: calc(50% - 25px);
    background: #353535;
}

.section-title h1 {
    color: #353535;
    font-size: 40px;
    letter-spacing: 5px;
    margin-bottom: 5px;
}

@media(max-width: 767.98px) {
    .section-title h1 {
        font-size: 40px;
        letter-spacing: 3px;
    }
}

@media(max-width: 567.98px) {
    .section-title h1 {
        font-size: 30px;
        letter-spacing: 2px;
    }
}
.team-1 {
    margin-bottom: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.team-1 .team-img {
    overflow: hidden;
}

.team-1 .team-img img {
    width: 100%;
    height: 300px;
    transition: all .3s;
    object-fit: cover;
}

.team-1:hover .team-img img {
    transform: scale(1.1);
}

.team-1 .team-content {
    padding: 20px;
}

.team-1 .team-content h2 {
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 2px;
}

.team-1 .team-content h3 {
    font-size: 16px;
    font-weight: 300;
}

.team-1 .team-content h4 {
    font-size: 16px;
    font-weight: 300;
    font-style: italic;
    letter-spacing: 1px;
    margin-bottom: 25px;
}

.team-1 .team-content p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
}

.team-1 .team-social {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0;
}

.team-1 .team-social a {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    padding: 11px 0 10px 0;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    transition: all .3s;
}

.team-1 .team-social a.social-tw {
    background: #00acee;
}

.team-1 .team-social a.social-fb {
    background: #3b5998;
}

.team-1 .team-social a.social-li {
    background: #0e76a8;
}

.team-1 .team-social a.social-in {
    background: #3f729b;
}

.team-1 .team-social a.social-yt {
    background: #c4302b;
}

.team-1 .team-social a:last-child {
    margin-right: 0;
}

.team-1 .team-social a:hover {
    background: #222222;
}
</style>
