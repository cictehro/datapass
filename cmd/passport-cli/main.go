package main

import (
"fmt"
"os"
)

func main() {
if len(os.Args) < 2 {
fmt.Println("passport-cli")
fmt.Println("commands: lookup, rank")
return
}

```
switch os.Args[1] {
case "lookup":
	fmt.Println("lookup not implemented")
case "rank":
	fmt.Println("rank not implemented")
default:
	fmt.Println("unknown command")
}
```

}
