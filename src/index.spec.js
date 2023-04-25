"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore see https://github.com/jest-community/jest-extended#setup
var matchers = require("jest-extended");
expect.extend(matchers);
test("juste parce qu'il en faut un", () => {
	expect(1).toEqual(1)
})