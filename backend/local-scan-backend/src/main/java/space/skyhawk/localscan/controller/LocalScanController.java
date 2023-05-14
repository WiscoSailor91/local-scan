package space.skyhawk.localscan.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/localscan")
public class LocalScanController {

    // http(s)://myserver/localscan/hello -> "Hello, world."
    @GetMapping(path = "/hello")
    public Object sayHello(@RequestParam("my_name_is") String name) {
        if (name != null) {
            return "Hello, " + name + ".";
        } else {
            return "Hello, world.";
        }
    }

}
