import styled from 'styled-components'


export const HeaderWrapper = styled.div`
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all .4s ease-in-out;
  background-color: #fff;
  z-index: 50;
  box-shadow: 0 2px 4px #d2cccc;

  .Header {
    height: 100%;
    width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;

  }
`

export const LogoWrapper = styled.div`
  width: 176px;
  height: 70px;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAAAaCAMAAABrRvUJAAAAtFBMVEUAAABYWFhycnIQEBB8fHwrKytfX19AQEBsbGx1dXVJSUlmZmZRUVE2Njb8yF8eHh78yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF/8yF8AAAD8yF8d5/Fy1rv8uWL8Q3jmv3D+aGsq3+pv1rzdx3T8wGHVzXj8SXfnv2/9fmz+dGn9oGUJisEJAAAAKnRSTlMAtlz+IfWj43Y/1o7H7eH67NLAmFoX59lnKA0F8YJy3rimHfnuxEpINzYgHeThAAACmElEQVRIx82X2XbbIBCGAQFCSIrifUnsJt2L0jZtk67v/14dBiJEJXOa4wv7v8jMMPDzGSGfmFht57PpdDZfkLPRfNWilrtzgdq1nZb7LTkDrdu+VusrcmotLttYkzlJiueiJEcqbbdvB5q+S3lUxhh+JEfa7qYd0e3LUyJN2jGtEkz6+AeXtrtoRzUd3PKCDMV4aBdjs/nwPMOCcb+A9PHr94hp3c2TQsgiN8bUzJalEAJ3o40BCeuMbZNzN7tkAqoK8syYpvQeNXIIgQu4xrUq2AW/Dunb3cOfX/0Xr0OiAJMZq4y50kBgOOQugoLc9bEtXFVpFy1TBU08BqhhEm9cS3q7yC+c0t3PL58/BaTrgIS75XaJ6JA4llrXMFRArmVZw5H42Y3/DHVtlw6RNEyhUmeFt4v9AtJ9hHQZIeUQrT1/8sjx41thXtnYwBC2K7e3UW62GiAJY3TPnUR+/4nEIaqwCeGmM8WcShAwa78F7lr7phwg1VBWRUAKfimk+MGhXXj4Hg8FeVBOqN88twUoA94BklsiVOfu/dJIkySS7FnI5yMR1bib7+0iv94bd//7x2NA2qeQMKeujbliTnwUKXgoRMJMQyfzneAXfy89PPYPaZtEItavwDbmFfE6gCT97c0RyamE3NvFfi/aMV1sSBIJ/2a6LKl2eS0ZKyt5CKmw0ytaG4eUa8W5Dkix32SMaApEaSSiTfiqrJ9yMY6EJSqDUuIgqvJ2sd/tEGiJ/8alkSB6X9bL60NInqlhwnrwpiNydrHf23+BXs0WJBJnrMAErm8oQYpSqUiXU8W7NkZuY+EjYZIqLHFUUlry4B75Xb2JiW4+kJNr87oNWs3JOeh999Jd787iBwpoMbu4BC1nG3IO+gsWfLGlZTZbuwAAAABJRU5ErkJggg==') no-repeat 0;
`

export const NavBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  a {
    transition: all .4s;
    text-decoration: none;
    color: #161e27;
    position: relative;
    padding: 0 15px;
  }

  a:hover {
    color: #161e27;
  }


  .active {
    color: #fa2800;

    &::after {
      content: "";
      position: absolute;
      background: #fa2800;
      left: 0;
      right: 0;
      bottom: -12px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      margin: 0 auto;
      opacity: 1;
    }
  }
`