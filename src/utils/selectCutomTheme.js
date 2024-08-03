export const selectCustomTheme = {
    select: {
        defaultProps: {
        },
        valid: {
            variants: ["standard", "outlined", "static"],
            sizes: ["md", "lg"],
            colors: [
                "blue-gray",
                "gray",
            ],
        },
        styles: {
            base: {
                select: {
                    // peer: "peer",
                    // width: "w-full",
                    // height: "h-full",
                    // bg: "bg-[#F6F7FB]",
                    color: "text-[#7F7F7F]",
                    fontFamily: "font-exo",
                    fontWeight: "font-medium",
                    textAlign: "text-left",
                    // outline: "outline outline-0 focus:outline-0",
                    // disabled: "disabled:bg-blue-gray-50 disabled:border-0",
                    // transition: "transition-all",
                },
                arrow: {
                   initial: {
                    //   display: "grid",
                    //   placeItems: "place-items-center",
                    //   position: "absolute",
                    //   top: "top-2/4",
                    //   right: "right-2",
                    //   pt: "pt-px",
                    //   width: "w-5",
                    //   height: "h-5",
                      color: "text-[#7F7F7F]",
                    //   transform: "rotate-0 -translate-y-2/4",
                    //   transition: "transition-all",
                   },
                   active: {
                      transform: "rotate-180",
                      mt: "mt-px",
                   },
                },
                label: {
                   display: "flex",
                   width: "w-full",
                   height: "h-full",
                   userSelect: "select-none",
                   pointerEvents: "pointer-events-none",
                   position: "absolute",
                   left: "left-0",
                   fontWeight: "font-medium",
                   transition: "transition-all",
                },
                // menu: {
                //     width: "w-full",
                //     maxHeight: "max-h-96",
                //     bg: "bg-white",
                //     p: "p-3",
                //     border: "border border-blue-gray-50",
                //     borderRadius: "rounded-md",
                //     boxShadow: "shadow-lg shadow-blue-gray-500/10",
                //     fontFamily: "font-sans",
                //     fontSize: "text-md",
                //     fontWeight: "font-medium",
                //     color: "text-blue-gray-500",
                //     overflow: "overflow-auto",
                //     outline: "focus:outline-none",
                // },
                // option: {
                //    initial: {
                //       pt: "pt-[9px]",
                //       pb: "pb-2",
                //       px: "px-3",
                //       borderRadius: "rounded-md",
                //       lightHeight: "leading-tight",
                //       cursor: "cursor-pointer",
                //       userSelect: "select-none",
                //       background: "hover:bg-blue-gray-50 focus:bg-blue-gray-50",
                //       opacity: "hover:bg-opacity-80 focus:bg-opacity-80",
                //       color: "hover:text-blue-gray-900 focus:text-blue-gray-900",
                //       outline: "outline outline-0",
                //       transition: "transition-all",
                //    },
                //    active: {
                //       bg: "bg-blue-gray-50 bg-opacity-80",
                //       color: "text-blue-gray-900",
                //    },
                //    disabled: {
                //       opacity: "opacity-50",
                //       cursor: "cursor-not-allowed",
                //       userSelect: "select-none",
                //       pointerEvents: "pointer-events-none",
                //    },
                // },
            },
            variants: {
                outlined: {
                    base: {
                       select: {},
                       label: {
                          position: "-top-1.5",
                          before: {
                             content: "before:content[' ']",
                             display: "before:block",
                             boxSizing: "before:box-border",
                             width: "before:w-2.5",
                             height: "before:h-1.5",
                             mt: "before:mt-[6.5px]",
                             mr: "before:mr-1",
                             borderRadius: "before:rounded-tl-md",
                             pointerEvents: "before:pointer-events-none",
                             transition: "before:transition-all",
                             disabled: "peer-disabled:before:border-transparent",
                          },
                          after: {
                             content: "after:content[' ']",
                             display: "after:block",
                             flexGrow: "after:flex-grow",
                             boxSizing: "after:box-border",
                             width: "after:w-2.5",
                             height: "after:h-1.5",
                             mt: "after:mt-[6.5px]",
                             ml: "after:ml-1",
                             borderRadius: "after:rounded-tr-md",
                             pointerEvents: "after:pointer-events-none",
                             transition: "after:transition-all",
                             disabled: "peer-disabled:after:border-transparent",
                          },
                       },
                    },
                    sizes: {
                        lg: {
                            container: {
                                height: "h-11",
                            },
                            select: {
                                fontSize: "text-[16px]",
                                px: "px-3",
                                py: "py-3",
                                borderRadius: "rounded-[7px]",
                            },
                            label: {
                                initial: {},
                                states: {
                                    close: {
                                        lineHeight: "leading-[3.5]",
                                    },
                                    open: {
                                        lineHeight: "leading-tight",
                                    },
                                    withValue: {
                                        lineHeight: "leading-tight",
                                    },
                                },
                            },
                        },
                    },
                    colors: {
                        select: {
                            "blue-gray": {
                                close: {
                                    borderColor: "border-blue-gray-200",
                                },
                                open: {
                                    borderColor: "border-blue-gray-500",
                                    borderTopColor: "border-t-none",
                                },
                                withValue: {
                                    borderColor: "border-none",
                                    borderTopColor: "border-t-none",
                                },
                            },
                        },
                        label: {
                            "blue-gray": {
                                close: {
                                    color: "text-[#7F7F7F]",
                                    before: "before:border-transparent",
                                    after: "after:border-transparent",
                                },
                                open: {
                                    color: "text-blue-gray-500",
                                    before: "before:border-blue-gray-500",
                                    after: "after:border-blue-gray-500",
                                },
                                withValue: {
                                    color: "text-blue-gray-400",
                                    before: "before:border-blue-gray-200",
                                    after: "after:border-blue-gray-200",
                                },
                            },
                        },
                    },
                    states: {
                        close: {
                            select: {
                                borderWidth: "",
                            },
                            label: {
                                fontSize: "text-[16px]",
                                disabled: "peer-disabled:text-blue-gray-400",
                                before: {
                                    bt: "before:border-t-transparent",
                                    bl: "before:border-l-transparent",
                                },
                                after: {
                                    bt: "after:border-t-transparent",
                                    br: "after:border-r-transparent",
                                },
                            },
                        },
                        open: {
                            select: {
                                borderWidth: "border-2",
                                borderColor: "border-t-transparent",
                            },
                            label: {
                                fontSize: "text-[0px]",
                                disabled: "peer-disabled:text-transparent",
                                before: {
                                    bt: "before:border-none",
                                    bl: "before:border-none",
                                },
                                after: {
                                    bt: "after:border-none",
                                    br: "after:border-none",
                                },
                            },
                        },
                        withValue: {
                            select: {
                                borderWidth: "border",
                                borderColor: "border-t-transparent",
                            },
                            label: {
                                fontSize: "text-[11px]",
                                disabled: "peer-disabled:text-transparent",
                                before: {
                                    bt: "before:border-none",
                                    bl: "before:border-none",
                                },
                                after: {
                                    bt: "after:border-none",
                                    br: "after:border-none",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};