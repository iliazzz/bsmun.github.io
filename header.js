document.write('\
<header>\
	 <table id="navtable">\
		<tr>\
			<td class="nav_logo">\
				<a href="home.html"><img src="logo.png"></a>\
			</td>\
			<td id="nav_cotc">\
				<a href="contact.html" class="navtext">\
					<h2>Contact</h2>\
				</a>\
			</td>\
			<td id="nav_abt">\
				<a href="about.html" class="navtext">\
					<h2>About</h2>\
				</a>\
			</td>\
			<td id="nav_reg">\
				<div class="navtext dropdown">\
					<h2 class="navbutton">Register</h2>\
					<div class="dropcontent">\
						<a href="reg.html">Registration</a>\
						<a href="fees.html">Fees and Scholarships</a>\
					</div>\
				</div>\
			</td>\
			<td id="nav_conf">\
				<div class="navtext dropdown">\
					<h2 class="navbutton">Conference</h2>\
					<div class="dropcontent">\
						<a href="committees.html">Committees</a>\
						<a href="event.html">Social Event</a>\
					</div>\
				</div>\
			</td>\
			<td id="nav_part">\
				<div class="navtext dropdown">\
					<h2 class="navbutton">Participate</h2>\
					<div class="dropcontent">\
						<a href="prepCent.html">Preparation Centre</a>\
						<a href="travelInfo.html">Travel Information</a>\
					</div>\
				</div>\
			</td>\
		</tr>\
	 </table>\
\
	 <div id="phonenav">\
	 	<div class="nav_logo">\
	 		<a href="home.html"><img src="logo.png"></a>\
	 	</div>	\
\
	 	<a href="javascript:void(0);" class="menu_a" onclick="m_menu()">\
	 		<h2>Black Sea MUN 2026 <i class="fa-solid fa-caret-left" id="carnav" style="color: #365a7a;"></i></h2>\
	 	</a>		\
\
	 	<div id="menulinks">\
	 		<a href="home.html" class="navtext">Home</a>\
	 		<a href="contact.html" class="navtext">Contact</a>\
			<a href="about.html" class="navtext">About</a>\
			<div>\
				<a href="javascript:void(0);" onclick="reg_menu()" class="navtext">\
					<h2>Register <i class="fa-solid fa-caret-left" id="carreg" style="color: #365a7a;"></i></h2>\
				</a>\
\
				<div id="regdrop">\
					<a href="reg.html" class="navtext">Registration</a>\
					<a href="fees.html" class="navtext">Fees and Scholarships</a>\
				</div>\
			</div>\
			<div>\
				<a href="javascript:void(0);" onclick="conf_menu()" class="navtext">\
					<h2>Conference <i class="fa-solid fa-caret-left" id="carcon" style="color: #365a7a;"></i></h2>\
				</a>\
\
				<div id="confdrop">\
					<a href="jDiv.html" class="navtext">Junior Division</a>\
					<a href="sDiv.html" class="navtext">Senior Division</a>\
				</div>\
			</div>\
			<div>\
				<a href="javascript:void(0);" onclick="join_menu()" class="navtext">\
					<h2>Participate <i class="fa-solid fa-caret-left" id="carjoin" style="color: #365a7a;"></i></h2>\
				</a>\
\
				<div id="joindrop">\
					<a href="prepCent.html" class="navtext">Preparation Centre</a>\
					<a href="travelInfo.html" class="navtext">Travel Information</a>\
				</div>\
			</div>\
	 	</div>\
	 </div>\
\
	</header>\ ');
