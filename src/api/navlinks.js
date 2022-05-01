/**
 *  Main Menu Json
 */
export default [
   {
      "menu_title": "Home",
      "type": "subMenu",
      "path": "/",
      "icon": "home",
      "child_routes": [
         {
            "path": "/",
            "menu_title": "Home - Fashion 1",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/index2",
            "menu_title": "Home - Fashion 2",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/index3",
            "menu_title": "Home - Fashion 3",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/index4",
            "menu_title": "Home - Electronic",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/index5",
            "menu_title": "Home - Furniture",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/index6",
            "menu_title": "Home - Kids",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
      ]
   },
   {
      "menu_title": "Shop",
      "path": "/",
      "icon": "party_mode",
      "type": "megaMenu",
      "child_routes": [
         {
            "path": "/grid-left-sidebar",
            "menu_title": "Shop Layout",
            "icon": "arrow_right_alt",
            "type": "childsubMenu",
            "child_routes": [
               {
                  "path": "/grid-left-sidebar",
                  "menu_title": "Shop Grid - Left Sidebar",
                  "icon": "arrow_right_alt",
                  "child_routes": null
               },
               {
                  "path": "/grid-right-sidebar",
                  "menu_title": "Shop Grid - Right Sidebar",
                  "icon": "arrow_right_alt",
                  "child_routes": null
               },
               {
                  "path": "/grid-no-sidebar",
                  "menu_title": "Shop Grid - No Sidebar",
                  "icon": "arrow_right_alt",
                  "child_routes": null
               },
               {
                  "path": "/grid-full-sidebar",
                  "menu_title": "Shop Grid - Full Width",
                  "icon": "arrow_right_alt",
                  "child_routes": null
               },
               {
                  "path": "/list-left-sidebar",
                  "menu_title": "Shop List - Left Sidebar",
                  "icon": "arrow_right_alt",
                  "child_routes": null
               },
               {
                  "path": "/list-right-sidebar",
                  "menu_title": "Shop List - Right Sidebar",
                  "icon": "arrow_right_alt",
                  "child_routes": null
               },
               {
                  "path": "/list-no-sidebar",
                  "menu_title": "Shop List - No Sidebar",
                  "icon": "arrow_right_alt",
                  "child_routes": null
               },
               {
                  "path": "/list-full-sidebar",
                  "menu_title": "Shop List - Full Width",
                  "icon": "arrow_right_alt",
                  "child_routes": null
               },
            ]
         },
         {
            "path": "/",
            "menu_title": "Product Pages",
            "icon": "arrow_right_alt",
            "type": "childsubMenu",
            "child_routes": [
               {
                  "path": "/product-single-left/Women/1",
                  "menu_title": "Product Left Image",
                  "icon": "arrow_right_alt",
                  "child_routes": null
               },
               {
                  "path": "/product-single-right/Women/1",
                  "menu_title": "Product Right Image",
                  "icon": "arrow_right_alt",
                  "child_routes": null
               },
               {
                  "path": "/cart",
                  "menu_title": "Product Cart",
                  "icon": "arrow_right_alt",
                  "child_routes": null
               },
               {
                  "path": "/checkout",
                  "menu_title": "Product Checkout",
                  "icon": "arrow_right_alt",
                  "child_routes": null
               },
            ]
         },
      ],
   },
   {
      "menu_title": "Pages",
      "type": "subMenu",
      "path": "/",
      "icon": "home",
      "child_routes": [
         {
            "path": "/about-us",
            "menu_title": "About",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/faq",
            "menu_title": "FAQ",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/sign-in",
            "menu_title": "Login",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/sign-in-1",
            "menu_title": "Login 2",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/sign-up",
            "menu_title": "Sign Up",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/coming-soon",
            "menu_title": "Coming Soon",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/page-not-found",
            "menu_title": "404",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/privacy-policy",
            "menu_title": "Privacy Policy",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/term-condition",
            "menu_title": "Term & Condition",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
      ]
   },
   {
      "menu_title": "Blog",
      "type": "subMenu",
      "path": "/",
      "icon": "home",
      "child_routes": [
         {
            "path": "/blog-card",
            "menu_title": "Blog Card",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/blog-listing-1",
            "menu_title": "Blog Listing 1",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/blog-listing-2",
            "menu_title": "Blog Listing 2",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/blog-single",
            "menu_title": "Blog Single",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
      ]
   },
   {
      "menu_title": "Contact",
      "type": "Menu",
      "path": "/contact-us",
      "child_routes": null
   }
]
