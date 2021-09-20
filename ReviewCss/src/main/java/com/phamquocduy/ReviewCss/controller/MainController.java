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
	
	@GetMapping(value="/lesson3vs4")
	public String lesson3vs4() {
		return "lesson3vs4";
	}
	
	@GetMapping(value="/lesson5")
	public String lesson5() {
		return "lesson5";
	}
}
