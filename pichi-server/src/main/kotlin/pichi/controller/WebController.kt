package pichi.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import javax.servlet.http.HttpServletRequest

@Controller
class WebController {
    @RequestMapping("/web/**")
    fun getIndex(request: HttpServletRequest?): String {
        return "/index.html"
    }
}