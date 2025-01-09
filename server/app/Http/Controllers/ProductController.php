<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Product::all(); 
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    
        $request->validate([
           'Name' => 'required', 
           'Category' => 'required', 
           'model' => 'required',
           'Price' => 'required', 
           'Discount' => 'required', 
           'Quantity' => 'required', 
           'main_image' => 'nullable|image',
           'additionalImage-0' => 'nullable|image',
           'additionalImage-1' => 'nullable|image',
           'additionalImage-2' => 'nullable|image',
        ]);
        //$mainImagePath = $request->file('main_image')->store('uploads', 'public');
        
        // $additionalImages = [];
        // foreach (range(0, 2) as $index) {
        //     if ($request->hasFile("additionalImage-$index")) {
        //         $additionalImages[] = $request->file("additionalImage-$index")->store('uploads', 'public');
        //     }
        // }

        $product = Product::create([
            'Name' => $request->Name,
            'Category' => $request->Category,
            'Model' => $request->model,
            'Description' => $request->Description,
            'Price' => $request->Price,
            'Discount' => $request->Discount,
            'image' => "abns",
            'Quantity' => $request->Quantity,
            // 'additional_images' => json_encode($additionalImages),
        ]);

        return response()->json(['product' => $product], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        //
        return Product::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        //
        $product = Product::find($id);
        $product->update($request->all());
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        //
        Product::destroy($id);
    }
    public function search(string $name)
    {
        //
        return Product::where('Name','like' , '%'.$name.'%')->get();
    }
        // app/Http/Controllers/ProductController.php
    public function getLatestProducts()
    {
        $products = Product::latest()->take(6)->get(); // Fetch 6 latest products
        return response()->json($products);
    }
    public function getLatestProductsCate(string $cate)
    {
        $products = Product::where('Category', $cate)
                       ->latest()
                       ->take(6)
                       ->get();
        return response()->json($products);
    }

}