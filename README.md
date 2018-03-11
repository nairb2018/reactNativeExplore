# reactNativeExplore
explore react native for fun

Here are the things that took me hours to figure out: 

### Common pitfalls when setting up React Native for iOS:
 * In the emulator/device, if it doesn't run at all: 
    * remove everything in node_modules and do Cmd-Shift-k to clean up build for Xcode
 * If the simulator is super slow and the "debug JS remotely" button does not click at all (screen frozen) 
    * In Simulator menu bar: 
        * debug -> DESELECT slow animations *AND* 
        * debug -> graphic quality override -> SELECT device default
        
    
