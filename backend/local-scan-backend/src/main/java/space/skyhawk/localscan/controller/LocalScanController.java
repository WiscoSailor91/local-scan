package space.skyhawk.localscan.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class LocalScanController {

    // http(s)://myserver/localscan/hello -> "Hello, world."
    @GetMapping(path = "/localscan/hello")
    public Object sayHello(@RequestParam("my_name_is") String name) {
        if (name != null) {
            return "Hello, " + name + ".";
        } else {
            return "Hello, world.";
        }
    }

    @PostMapping(path = "/userinfo")
    public Map<String, Object> reflectUserInfo(@RequestBody List<String> userInfo) {
        return userInfo
                .stream()
                .collect(Collectors.toMap(
                        str -> str,
                        str -> new StringBuilder(str).reverse().toString()
                ));
    }

    // get JSON, which gets converted to some Java Collection (List, Map, ...)
    // look at that collection, and for each one...
    //    check our cache/database/whatever to see if we know about them already
    //        if yes, note that for a thing we'll be returning to the user
    //        if no, give that name we don't know about to some other service to go figure it out
    //    with all these things we've collected, send back whatever Java Collection thing we made
    // which will get automatically mapped to JSON by Spring Boot/Jackson (a JSON-to-from-object mapper)
}
