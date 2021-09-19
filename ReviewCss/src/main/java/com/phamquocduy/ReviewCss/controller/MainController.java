package com.phamquocduy.ReviewCss.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

	@GetMapping(value="/")
	public String home() {
		return "index";
	}
	
	@GetMapping(value="/lesson2")
	public String lesson2() {
		return "lesson2";
	}
}
