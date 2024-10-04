let loginComponent = document.createElement('div')
loginComponent.innerHTML = `
              <div id="id01" class="modal">
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                      <input type="text" placeholder="Enter Username" name="uname" required>

                    <label for="psw"><b>Password</b></label>
                      <input type="password" placeholder="Enter Password" name="psw" required>

                    <button class="login2" type="submit">Login</button>
                    <label>
                      <input type="checkbox" checked="checked" name="remember" style="font-family:'Roboto', sans-serif;"> Remember me
                    </label>
                </div>

              <div class="container" style="background-color:#f1f1f1">
                 <button  type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn" style="font-family:'Roboto', sans-serif;">Cancel</button>
                   <span class="psw" style="font-family:'Roboto', sans-serif;" >Forgot <a href="#">password?</a></span>
              </div>
              <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
              </div>`