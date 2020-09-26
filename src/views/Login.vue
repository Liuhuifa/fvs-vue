<template>
  <div>
    <div class="container demo-1">
      <div class="content">
        <div id="large-header" class="large-header">
          <canvas id="demo-canvas"></canvas>
          <div class="logo_box">
            <h3>欢迎你</h3>
            <form action="#" name="f" method="post">
              <div class="input_outer">
                <span class="u_user"></span>
                <input name="logname" class="text" style="color: #FFFFFF !important" type="text" placeholder="请输入账户">
              </div>
              <div class="input_outer">
                <span class="us_uer"></span>
                <input name="logpass" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"
                       type="password" placeholder="请输入密码">
              </div>
              <div class="mb2"><a class="act-but submit" href="javascript:;" style="color: #FFFFFF">登录</a></div>
            </form>
          </div>
        </div>
      </div>
    </div><!-- /container -->
  </div>
</template>

<script>
// import TweenLite from '../theme/login/js/TweenLite.min';
// import '../theme/login/js/TweenLite.min';
import '../theme/login/js/rAF';
// import '../theme/login/js/demo-1';
import '../theme/login/css/normalize.css';
import '../theme/login/css/demo.css';
import '../theme/login/css/component.css';

export default {
  name: "Login",
  data() {
    return {
      width: true,
      height: true,
      largeHeader: true,
      canvas: true,
      ctx: true,
      points: true,
      target: true,
      animateHeader: true
    }
  },
  created() {
    // this.$axios.get('http://localhost:1103:8080/oauth/authorize?client_id=e5170418-8560-460b-9296-d7bd95a06a5e&response_type=code&scope=all&redirect_uri=http://200.3.201.182:8080', {
    // this.$axios.get('/oauth/authorize', {
    //   data: {
    //     client_id: 'e5170418-8560-460b-9296-d7bd95a06a5e',
    //     response_type: 'code',
    //     scope: 'all',
    //     redirect_uri: 'http://200.3.201.182:8080'
    //   }
    // }).then(response => {
    //   console.log(response)
    // })
    // this.$axios({
    //   url: 'http://192.168.157.131/oauth/authorize',
    //   method: 'get',
    //   params: {
    //     client_id: 'e5170418-8560-460b-9296-d7bd95a06a5e',
    //     response_type: 'code',
    //     scope: 'all',
    //     redirect_uri: 'http://192.168.157.131'
    //   },
    //   timeout: 5000
    // }).then(result => {
    //   console.log(result)
    // })
  },
  mounted() {
    this.initHeader();
    this.initAnimation();
    this.addListeners();

  },
  methods: {
    initHeader: function () {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.target = {x: this.width / 2, y: this.height / 2};

      this.largeHeader = document.getElementById('large-header');
      console.log(this.largeHeader)
      this.largeHeader.style.height = this.height + 'px';

      this.canvas = document.getElementById('demo-canvas');
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.ctx = this.canvas.getContext('2d');

      // create points
      this.points = [];
      for (var x = 0; x < this.width; x = x + this.width / 20) {
        for (var y = 0; y < this.height; y = y + this.height / 20) {
          var px = x + Math.random() * this.width / 20;
          var py = y + Math.random() * this.height / 20;
          var p = {x: px, originX: px, y: py, originY: py};
          this.points.push(p);
        }
      }

      // for each point find the 5 closest points
      for (var i = 0; i < this.points.length; i++) {
        var closest = [];
        var p1 = this.points[i];
        for (var j = 0; j < this.points.length; j++) {
          var p2 = this.points[j]
          if (!(p1 == p2)) {
            var placed = false;
            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] == undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }


            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (this.getDistance(p1, p2) < this.getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // assign a circle to each point
      for (let i in this.points) {
        var c = this.Circle(this.points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
        this.points[i].circle = c;
      }
    },
    Circle: function (pos, rad, color) {
      var _this = this;

      // constructor
      (function () {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
      })();

      this.draw = function () {
        if (!_this.active) return;
        this.ctx.beginPath();
        this.ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'rgba(156,217,249,' + _this.active + ')';
        this.ctx.fill();
      };
    },
    addListeners: function () {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', this.mouseMove);
      }
      window.addEventListener('scroll', this.scrollCheck);
      window.addEventListener('resize', this.resize);
    },
    mouseMove: function (e) {
      var posx = 0;
      var posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      this.target.x = posx;
      this.target.y = posy;
    },
    scrollCheck: function () {
      if (document.body.scrollTop > this.height) this.animateHeader = false;
      else this.animateHeader = true;
    },
    resize: function () {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.largeHeader.style.height = this.height + 'px';
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    },
    initAnimation: function () {
      this.animate();
      // for (var i in this.points) {
      //   this.shiftPoint(this.points[i]);
      // }
    },
    animate: function () {
      if (this.animateHeader) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (var i in this.points) {
          // detect points in range
          if (Math.abs(this.getDistance(this.target, this.points[i])) < 4000) {
            this.points[i].active = 0.3;
            this.points[i].circle.active = 0.6;
          } else if (Math.abs(this.getDistance(this.target, this.points[i])) < 20000) {
            this.points[i].active = 0.1;
            this.points[i].circle.active = 0.3;
          } else if (Math.abs(this.getDistance(this.target, this.points[i])) < 40000) {
            this.points[i].active = 0.02;
            this.points[i].circle.active = 0.1;
          } else {
            this.points[i].active = 0;
            this.points[i].circle.active = 0;
          }

          this.drawLines(this.points[i]);
          this.points[i].circle.draw();
        }
      }
      requestAnimationFrame(this.animate);
    },
    drawLines: function (p) {
      if (!p.active) return;
      for (var i in p.closest) {
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(p.closest[i].x, p.closest[i].y);
        this.ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
        this.ctx.stroke();
      }
    },
    getDistance: function (p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    },
    // shiftPoint: function (p) {
    //   TweenLite.to(p, 1 + 1 * Math.random(), {
    //     x: p.originX - 50 + Math.random() * 100,
    //     y: p.originY - 50 + Math.random() * 100, ease: this.Circ.easeInOut,
    //     onComplete: function () {
    //       this.shiftPoint(p);
    //     }
    //   });
    // }
  }


}
</script>

<style scoped>

</style>