import { Navbar, Dropdown, Avatar } from "flowbite-react"
import { useRouter } from 'next/router'

export default function Nav() {
  const router = useRouter();
  return (
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src="/vercel.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Next logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      NextJS
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://robohash.org/Sentrica" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Username
        </span>
        <span className="block truncate text-sm font-medium">
          email@example.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link>
    <Dropdown
      arrowIcon={false}
      inline={true}
      label="Products"
    >
      <Dropdown.Item onClick={() => router.push("/products")}>
        Get All
      </Dropdown.Item>
      <Dropdown.Item onClick={() => router.push("/products/create")}>
        Create
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  );
}
