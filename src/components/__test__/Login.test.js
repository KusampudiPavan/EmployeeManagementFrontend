import { render,screen } from "@testing-library/react";
import LoginAdmin from "../Admin/LoginAdmin";

describe("Test the Admin Login Component",() => {
    test("render the login form with 1 button", async() => {
        render(<LoginAdmin/>)
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
    });
});