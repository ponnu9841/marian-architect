import { setCurrentSection } from "@/redux/features/utils-slice";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { useEffect } from "react";
import { debounce } from "lodash";

const sections = ["home", "portfolio", "about", "services", "contact"];
export function useScrollSpy() {
    const dispatch = useAppDispatch();
    useEffect(() => {
      // Create AbortController to clean up event listeners
      const controller = new AbortController();
      const { signal } = controller;
  
      // Create a more efficient scroll handler with debounce
      const handleScroll = debounce(() => {
        // Cache window height calculation
        const windowMiddle = window.innerHeight / 2;
        let currentSection = "";
        
        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(() => {
          // Cache section elements to avoid repeated DOM lookups
          const sectionElements = sections.map(id => ({
            id,
            element: document.getElementById(id)
          })).filter(item => item.element);
          
          // Find the section in view
          for (const { id, element } of sectionElements) {
            const rect = element?.getBoundingClientRect();
            if (rect && rect.top <= windowMiddle && rect.bottom >= windowMiddle) {
              if (currentSection !== id) { // Only update if changed
                currentSection = id;
                dispatch(setCurrentSection(currentSection));
              }
              break; // Exit the loop once we find the first matching section
            }
          }
        });
      }, 100); // 100ms debounce - adjust as needed
      
      // Passive option improves scroll performance
      window.addEventListener("scroll", handleScroll, { 
        passive: true,
        signal
      });
      
      // Initial check
      handleScroll();
      
      // Cleanup function
      return () => {
        controller.abort(); // Abort all listeners connected to this controller
        handleScroll.cancel(); // Cancel any pending debounced executions
      };
    }, [dispatch]); // Include dependencies
  }