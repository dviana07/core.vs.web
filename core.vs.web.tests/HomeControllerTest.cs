using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace core.vs.web.tests
{
    [TestFixture]
    public class HomeControllerTest
    {

        public class when_call_home_index
        {

            [TestCase("", "")]
            [TestCase("email@email.com", "")]
            [TestCase("", "password1")]
            public void should_return_unauthorized_for_invalid_credentials(string userId, string password)
            {



            }

        }

    }
}
