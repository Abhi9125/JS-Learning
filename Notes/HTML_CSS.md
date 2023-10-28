# Html Notes

- Forms

## Froms in HTML

- In input tag use name attribute jisse hamara backend identify kr sake ki kha entry krni hai.
- label me for attribute and input me id same hone pr agar hm lael wale palceholder pr click karege to uske iput area me reach kr jayege .

````HTML
<!-- action use for communicate to backend -->
<form action="backend.php">
      <label for="fname">Frist Name :</label>
      <input
        type="text"
        name="fname"
        id="fanme"
        placeholder="Enter your frist name"
        required
      />
      <br />

      <label for="lname">Last Name :</label>
      <input
        type="text"
        name="lname"
        id="lname"
        placeholder="Enter your last name"
        required
      />
      <br />
      <label for="email">e -mail:</label>
      <input type="email" name="email" placeholder="Enter your emai" required />

      <br />

      <label for="pass">Enter Password: </label>
      <input
        type="password"
        name="pass"
        minlength="6"
        maxlength="12"
        required
      />

      <br />

      <!--In radio case all name attribue are same in input area bcz hame kisi eek pe hi check mark krna hai   -->
      <div>
        <label for="Gender">Gender</label>
        <label for="Mr.">Mr.</label>
        <input type="radio" name="Mygender" id="Mr." />

        <label for="Miss.">Miss.</label>
        <input type="radio" name="Mygender" id="Miss." />

        <label>Trans</label>
        <input type="radio" name="Mygender" id="Trans" />
      </div>

      <br />

      <div>
        <label for="select">Select Country</label>
        <select name="selectnName" id="select">
          <option value="Ind">India</option>
          <option value="Pak">Pakistan</option>
          <option value="Npl">Nepal</option>
          <option value="Sl">Sri Lanka</option>
        </select>
      </div>

      <input type="submit" value="login!" />
    </form>```
````
