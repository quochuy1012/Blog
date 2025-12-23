export type Post = {
  id: string
  title: string
  titleEn: string
  slug: string
  series: "java" | "javascript"
  date: string
  readTime: number
  excerpt: string
  excerptEn: string
  content: string
  contentEn: string
  tags: string[]
}

export const posts: Post[] = [
  // Java Series
  {
    id: "1",
    title: "Giới thiệu về Lập trình Mạng với Java",
    titleEn: "Introduction to Network Programming with Java",
    slug: "gioi-thieu-lap-trinh-mang-java",
    series: "java",
    date: "2024-01-15",
    readTime: 5,
    excerpt: "Tìm hiểu về lập trình mạng với Java, các khái niệm cơ bản và cách bắt đầu.",
    excerptEn: "Learn about network programming with Java, basic concepts and how to get started.",
    content: `# Giới thiệu về Lập trình Mạng với Java

Lập trình mạng là một kỹ năng quan trọng trong phát triển phần mềm hiện đại. Với Java, bạn có thể xây dựng các ứng dụng mạng mạnh mẽ và hiệu quả.

## Khái niệm cơ bản

Lập trình mạng cho phép các ứng dụng giao tiếp với nhau qua mạng. Java cung cấp các API mạnh mẽ để làm việc với:

- **Sockets**: Giao tiếp TCP/IP
- **HTTP**: Giao thức web
- **REST APIs**: Xây dựng web services

## Bắt đầu với Java Networking

\`\`\`java
import java.net.Socket;
import java.io.*;

public class SimpleClient {
    public static void main(String[] args) {
        try {
            // Kết nối đến server
            Socket socket = new Socket("localhost", 8080);
            
            // Gửi dữ liệu
            PrintWriter out = new PrintWriter(
                socket.getOutputStream(), true
            );
            out.println("Hello Server!");
            
            // Đọc phản hồi
            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream())
            );
            String response = in.readLine();
            System.out.println("Server: " + response);
            
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## Kinh nghiệm học tập

- Bắt đầu với các ví dụ đơn giản
- Hiểu rõ TCP/IP model
- Thực hành với localhost trước
- Xử lý exceptions cẩn thận

## Kết luận

Java cung cấp các công cụ mạnh mẽ cho lập trình mạng. Hãy bắt đầu với những ví dụ đơn giản và dần nâng cao kỹ năng của bạn.`,
    contentEn: `# Introduction to Network Programming with Java

Network programming is an important skill in modern software development. With Java, you can build powerful and efficient network applications.

## Basic Concepts

Network programming allows applications to communicate with each other over a network. Java provides powerful APIs to work with:

- **Sockets**: TCP/IP communication
- **HTTP**: Web protocol
- **REST APIs**: Building web services

## Getting Started with Java Networking

\`\`\`java
import java.net.Socket;
import java.io.*;

public class SimpleClient {
    public static void main(String[] args) {
        try {
            // Connect to server
            Socket socket = new Socket("localhost", 8080);
            
            // Send data
            PrintWriter out = new PrintWriter(
                socket.getOutputStream(), true
            );
            out.println("Hello Server!");
            
            // Read response
            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream())
            );
            String response = in.readLine();
            System.out.println("Server: " + response);
            
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## Learning Experience

- Start with simple examples
- Understand TCP/IP model well
- Practice with localhost first
- Handle exceptions carefully

## Conclusion

Java provides powerful tools for network programming. Start with simple examples and gradually improve your skills.`,
    tags: ["Java", "Networking", "Basics"],
  },
  {
    id: "2",
    title: "Socket TCP cơ bản trong Java",
    titleEn: "Basic TCP Socket in Java",
    slug: "socket-tcp-co-ban-java",
    series: "java",
    date: "2024-01-20",
    readTime: 8,
    excerpt: "Học cách tạo server và client sử dụng TCP Socket trong Java.",
    excerptEn: "Learn how to create server and client using TCP Socket in Java.",
    content: `# Socket TCP cơ bản trong Java

TCP Socket là cách phổ biến nhất để giao tiếp qua mạng trong Java. Bài viết này sẽ hướng dẫn bạn tạo một server và client đơn giản.

## Server Socket

\`\`\`java
import java.net.*;
import java.io.*;

public class TCPServer {
    public static void main(String[] args) {
        try {
            // Tạo server socket ở port 8080
            ServerSocket serverSocket = new ServerSocket(8080);
            System.out.println("Server đang chờ kết nối...");
            
            // Chấp nhận kết nối từ client
            Socket clientSocket = serverSocket.accept();
            System.out.println("Client đã kết nối!");
            
            // Đọc dữ liệu từ client
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream())
            );
            String message = in.readLine();
            System.out.println("Nhận được: " + message);
            
            // Gửi phản hồi
            PrintWriter out = new PrintWriter(
                clientSocket.getOutputStream(), true
            );
            out.println("Server đã nhận: " + message);
            
            // Đóng kết nối
            clientSocket.close();
            serverSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## Client Socket

\`\`\`java
import java.net.*;
import java.io.*;

public class TCPClient {
    public static void main(String[] args) {
        try {
            // Kết nối đến server
            Socket socket = new Socket("localhost", 8080);
            
            // Gửi message
            PrintWriter out = new PrintWriter(
                socket.getOutputStream(), true
            );
            out.println("Hello from Client!");
            
            // Đọc phản hồi
            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream())
            );
            String response = in.readLine();
            System.out.println("Server phản hồi: " + response);
            
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## Kinh nghiệm

- Luôn đóng socket sau khi sử dụng
- Xử lý IOException đúng cách
- Sử dụng try-with-resources để tự động đóng
- Test với localhost trước khi deploy`,
    contentEn: `# Basic TCP Socket in Java

TCP Socket is the most common way to communicate over network in Java. This article will guide you to create a simple server and client.

## Server Socket

\`\`\`java
import java.net.*;
import java.io.*;

public class TCPServer {
    public static void main(String[] args) {
        try {
            // Create server socket on port 8080
            ServerSocket serverSocket = new ServerSocket(8080);
            System.out.println("Server waiting for connection...");
            
            // Accept connection from client
            Socket clientSocket = serverSocket.accept();
            System.out.println("Client connected!");
            
            // Read data from client
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream())
            );
            String message = in.readLine();
            System.out.println("Received: " + message);
            
            // Send response
            PrintWriter out = new PrintWriter(
                clientSocket.getOutputStream(), true
            );
            out.println("Server received: " + message);
            
            // Close connection
            clientSocket.close();
            serverSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## Client Socket

\`\`\`java
import java.net.*;
import java.io.*;

public class TCPClient {
    public static void main(String[] args) {
        try {
            // Connect to server
            Socket socket = new Socket("localhost", 8080);
            
            // Send message
            PrintWriter out = new PrintWriter(
                socket.getOutputStream(), true
            );
            out.println("Hello from Client!");
            
            // Read response
            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream())
            );
            String response = in.readLine();
            System.out.println("Server response: " + response);
            
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## Experience

- Always close socket after use
- Handle IOException properly
- Use try-with-resources for auto-close
- Test with localhost before deploying`,
    tags: ["Java", "Socket", "TCP"],
  },
  {
    id: "3",
    title: "Xây dựng Server Multi-Client với Java",
    titleEn: "Building Multi-Client Server with Java",
    slug: "server-multi-client-java",
    series: "java",
    date: "2024-01-25",
    readTime: 10,
    excerpt: "Học cách xây dựng server có thể xử lý nhiều client đồng thời sử dụng Thread.",
    excerptEn: "Learn how to build a server that can handle multiple clients simultaneously using Threads.",
    content: `# Xây dựng Server Multi-Client với Java

Để server có thể xử lý nhiều client cùng lúc, chúng ta cần sử dụng Thread. Mỗi client sẽ được xử lý trong một thread riêng.

## Multi-Client Server

\`\`\`java
import java.net.*;
import java.io.*;
import java.util.concurrent.*;

public class MultiClientServer {
    private static final int PORT = 8080;
    private static ExecutorService threadPool = 
        Executors.newFixedThreadPool(10);
    
    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(PORT);
            System.out.println("Server đang chờ kết nối...");
            
            while (true) {
                Socket clientSocket = serverSocket.accept();
                System.out.println("Client mới kết nối: " + 
                    clientSocket.getRemoteSocketAddress());
                
                // Xử lý mỗi client trong thread riêng
                threadPool.execute(new ClientHandler(clientSocket));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

class ClientHandler implements Runnable {
    private Socket clientSocket;
    
    public ClientHandler(Socket socket) {
        this.clientSocket = socket;
    }
    
    @Override
    public void run() {
        try {
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream())
            );
            PrintWriter out = new PrintWriter(
                clientSocket.getOutputStream(), true
            );
            
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println("Nhận từ client: " + inputLine);
                out.println("Echo: " + inputLine);
            }
            
            clientSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## Kinh nghiệm

- Sử dụng ThreadPool để quản lý threads hiệu quả
- Giới hạn số lượng client đồng thời
- Xử lý lỗi cho từng client độc lập
- Logging để debug dễ dàng hơn`,
    contentEn: `# Building Multi-Client Server with Java

To make a server handle multiple clients simultaneously, we need to use Threads. Each client will be handled in a separate thread.

## Multi-Client Server

\`\`\`java
import java.net.*;
import java.io.*;
import java.util.concurrent.*;

public class MultiClientServer {
    private static final int PORT = 8080;
    private static ExecutorService threadPool = 
        Executors.newFixedThreadPool(10);
    
    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(PORT);
            System.out.println("Server waiting for connections...");
            
            while (true) {
                Socket clientSocket = serverSocket.accept();
                System.out.println("New client connected: " + 
                    clientSocket.getRemoteSocketAddress());
                
                // Handle each client in separate thread
                threadPool.execute(new ClientHandler(clientSocket));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

class ClientHandler implements Runnable {
    private Socket clientSocket;
    
    public ClientHandler(Socket socket) {
        this.clientSocket = socket;
    }
    
    @Override
    public void run() {
        try {
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream())
            );
            PrintWriter out = new PrintWriter(
                clientSocket.getOutputStream(), true
            );
            
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println("Received from client: " + inputLine);
                out.println("Echo: " + inputLine);
            }
            
            clientSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## Experience

- Use ThreadPool to manage threads efficiently
- Limit concurrent client connections
- Handle errors for each client independently
- Logging makes debugging easier`,
    tags: ["Java", "Socket", "Thread", "Server"],
  },
  {
    id: "4",
    title: "UDP Socket và Datagram trong Java",
    titleEn: "UDP Socket and Datagram in Java",
    slug: "udp-socket-datagram-java",
    series: "java",
    date: "2024-02-01",
    readTime: 7,
    excerpt: "Tìm hiểu về UDP Socket và cách sử dụng DatagramSocket trong Java.",
    excerptEn: "Learn about UDP Socket and how to use DatagramSocket in Java.",
    content: `# UDP Socket và Datagram trong Java

UDP (User Datagram Protocol) là giao thức không kết nối, nhanh hơn TCP nhưng không đảm bảo thứ tự và độ tin cậy.

## UDP Server

\`\`\`java
import java.net.*;

public class UDPServer {
    public static void main(String[] args) {
        try {
            DatagramSocket socket = new DatagramSocket(8080);
            byte[] buffer = new byte[1024];
            
            while (true) {
                DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
                socket.receive(packet);
                
                String message = new String(packet.getData(), 0, packet.getLength());
                System.out.println("Nhận được: " + message);
                
                // Gửi phản hồi
                InetAddress clientAddress = packet.getAddress();
                int clientPort = packet.getPort();
                String response = "Server đã nhận: " + message;
                byte[] responseData = response.getBytes();
                
                DatagramPacket responsePacket = new DatagramPacket(
                    responseData, responseData.length, 
                    clientAddress, clientPort
                );
                socket.send(responsePacket);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## UDP Client

\`\`\`java
import java.net.*;

public class UDPClient {
    public static void main(String[] args) {
        try {
            DatagramSocket socket = new DatagramSocket();
            
            String message = "Hello UDP Server!";
            byte[] data = message.getBytes();
            
            InetAddress serverAddress = InetAddress.getByName("localhost");
            DatagramPacket packet = new DatagramPacket(
                data, data.length, serverAddress, 8080
            );
            
            socket.send(packet);
            
            // Nhận phản hồi
            byte[] buffer = new byte[1024];
            DatagramPacket response = new DatagramPacket(buffer, buffer.length);
            socket.receive(response);
            
            String responseMessage = new String(
                response.getData(), 0, response.getLength()
            );
            System.out.println("Server phản hồi: " + responseMessage);
            
            socket.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## Khi nào dùng UDP?

- Streaming video/audio
- Online games
- DNS queries
- Khi tốc độ quan trọng hơn độ tin cậy`,
    contentEn: `# UDP Socket and Datagram in Java

UDP (User Datagram Protocol) is a connectionless protocol, faster than TCP but doesn't guarantee order and reliability.

## UDP Server

\`\`\`java
import java.net.*;

public class UDPServer {
    public static void main(String[] args) {
        try {
            DatagramSocket socket = new DatagramSocket(8080);
            byte[] buffer = new byte[1024];
            
            while (true) {
                DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
                socket.receive(packet);
                
                String message = new String(packet.getData(), 0, packet.getLength());
                System.out.println("Received: " + message);
                
                // Send response
                InetAddress clientAddress = packet.getAddress();
                int clientPort = packet.getPort();
                String response = "Server received: " + message;
                byte[] responseData = response.getBytes();
                
                DatagramPacket responsePacket = new DatagramPacket(
                    responseData, responseData.length, 
                    clientAddress, clientPort
                );
                socket.send(responsePacket);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## UDP Client

\`\`\`java
import java.net.*;
import java.io.*;

public class UDPClient {
    public static void main(String[] args) {
        try {
            DatagramSocket socket = new DatagramSocket();
            
            String message = "Hello UDP Server!";
            byte[] data = message.getBytes();
            
            InetAddress serverAddress = InetAddress.getByName("localhost");
            DatagramPacket packet = new DatagramPacket(
                data, data.length, serverAddress, 8080
            );
            
            socket.send(packet);
            
            // Receive response
            byte[] buffer = new byte[1024];
            DatagramPacket response = new DatagramPacket(buffer, buffer.length);
            socket.receive(response);
            
            String responseMessage = new String(
                response.getData(), 0, response.getLength()
            );
            System.out.println("Server response: " + responseMessage);
            
            socket.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## When to use UDP?

- Video/audio streaming
- Online games
- DNS queries
- When speed is more important than reliability`,
    tags: ["Java", "UDP", "Socket", "Datagram"],
  },
  {
    id: "5",
    title: "HTTP Client với Java",
    titleEn: "HTTP Client with Java",
    slug: "http-client-java",
    series: "java",
    date: "2024-02-05",
    readTime: 9,
    excerpt: "Học cách tạo HTTP request và xử lý response trong Java.",
    excerptEn: "Learn how to create HTTP requests and handle responses in Java.",
    content: `# HTTP Client với Java

Java 11+ cung cấp HttpClient API mạnh mẽ để làm việc với HTTP requests.

## HTTP GET Request

\`\`\`java
import java.net.http.*;
import java.net.URI;
import java.io.IOException;

public class HttpClientExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.example.com/data"))
            .GET()
            .build();
        
        try {
            HttpResponse<String> response = client.send(
                request, 
                HttpResponse.BodyHandlers.ofString()
            );
            
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response: " + response.body());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## HTTP POST Request

\`\`\`java
import java.net.http.*;
import java.net.URI;

public class HttpPostExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        
        String jsonBody = "{\\"name\\": \\"John\\", \\"age\\": 30}";
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.example.com/users"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
            .build();
        
        try {
            HttpResponse<String> response = client.send(
                request,
                HttpResponse.BodyHandlers.ofString()
            );
            
            System.out.println("Response: " + response.body());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## Async HTTP Request

\`\`\`java
HttpClient client = HttpClient.newHttpClient();

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .GET()
    .build();

client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body)
    .thenAccept(System.out::println)
    .join();
\`\`\`

## Kinh nghiệm

- Sử dụng HttpClient từ Java 11+
- Xử lý exceptions đúng cách
- Sử dụng async cho performance tốt hơn
- Kiểm tra status code trước khi xử lý response`,
    contentEn: `# HTTP Client with Java

Java 11+ provides powerful HttpClient API to work with HTTP requests.

## HTTP GET Request

\`\`\`java
import java.net.http.*;
import java.net.URI;
import java.io.IOException;

public class HttpClientExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.example.com/data"))
            .GET()
            .build();
        
        try {
            HttpResponse<String> response = client.send(
                request, 
                HttpResponse.BodyHandlers.ofString()
            );
            
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response: " + response.body());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## HTTP POST Request

\`\`\`java
import java.net.http.*;
import java.net.URI;

public class HttpPostExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        
        String jsonBody = "{\\"name\\": \\"John\\", \\"age\\": 30}";
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.example.com/users"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
            .build();
        
        try {
            HttpResponse<String> response = client.send(
                request,
                HttpResponse.BodyHandlers.ofString()
            );
            
            System.out.println("Response: " + response.body());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## Async HTTP Request

\`\`\`java
HttpClient client = HttpClient.newHttpClient();

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .GET()
    .build();

client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body)
    .thenAccept(System.out::println)
    .join();
\`\`\`

## Experience

- Use HttpClient from Java 11+
- Handle exceptions properly
- Use async for better performance
- Check status code before processing response`,
    tags: ["Java", "HTTP", "Client"],
  },
  // JavaScript Series
  {
    id: "6",
    title: "Giới thiệu về Lập trình Mạng với JavaScript",
    titleEn: "Introduction to Network Programming with JavaScript",
    slug: "gioi-thieu-lap-trinh-mang-javascript",
    series: "javascript",
    date: "2024-02-10",
    readTime: 6,
    excerpt: "Tìm hiểu về lập trình mạng với JavaScript và Node.js.",
    excerptEn: "Learn about network programming with JavaScript and Node.js.",
    content: `# Giới thiệu về Lập trình Mạng với JavaScript

JavaScript không chỉ chạy trên browser, với Node.js bạn có thể xây dựng các ứng dụng mạng mạnh mẽ.

## Node.js và Networking

Node.js được xây dựng trên V8 engine và cung cấp các module mạnh mẽ cho networking:

- **http/https**: Tạo HTTP server và client
- **net**: TCP sockets
- **dgram**: UDP sockets
- **ws**: WebSocket

## HTTP Server đơn giản

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js Server!');
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
\`\`\`

## Fetch API (Browser)

\`\`\`javascript
// Fetch API trong browser
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
\`\`\`

## Axios (Node.js)

\`\`\`javascript
const axios = require('axios');

axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
\`\`\`

## Kinh nghiệm

- Node.js rất phù hợp cho I/O intensive applications
- Sử dụng async/await cho code dễ đọc hơn
- Xử lý errors đúng cách
- Sử dụng Express.js cho web applications`,
    contentEn: `# Introduction to Network Programming with JavaScript

JavaScript doesn't only run on browser, with Node.js you can build powerful network applications.

## Node.js and Networking

Node.js is built on V8 engine and provides powerful modules for networking:

- **http/https**: Create HTTP server and client
- **net**: TCP sockets
- **dgram**: UDP sockets
- **ws**: WebSocket

## Simple HTTP Server

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js Server!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
\`\`\`

## Fetch API (Browser)

\`\`\`javascript
// Fetch API in browser
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
\`\`\`

## Axios (Node.js)

\`\`\`javascript
const axios = require('axios');

axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
\`\`\`

## Experience

- Node.js is great for I/O intensive applications
- Use async/await for more readable code
- Handle errors properly
- Use Express.js for web applications`,
    tags: ["JavaScript", "Node.js", "Networking"],
  },
  {
    id: "7",
    title: "TCP Socket với Node.js",
    titleEn: "TCP Socket with Node.js",
    slug: "tcp-socket-nodejs",
    series: "javascript",
    date: "2024-02-15",
    readTime: 8,
    excerpt: "Học cách tạo TCP server và client với Node.js net module.",
    excerptEn: "Learn how to create TCP server and client with Node.js net module.",
    content: `# TCP Socket với Node.js

Node.js cung cấp module \`net\` để làm việc với TCP sockets. Đây là cách tạo server và client.

## TCP Server

\`\`\`javascript
const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client đã kết nối:', socket.remoteAddress);
    
    socket.on('data', (data) => {
        const message = data.toString();
        console.log('Nhận được:', message);
        
        // Echo lại cho client
        socket.write('Server nhận được: ' + message);
    });
    
    socket.on('end', () => {
        console.log('Client đã ngắt kết nối');
    });
    
    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });
});

server.listen(8080, () => {
    console.log('TCP Server đang chạy tại port 8080');
});
\`\`\`

## TCP Client

\`\`\`javascript
const net = require('net');

const client = new net.Socket();

client.connect(8080, 'localhost', () => {
    console.log('Đã kết nối đến server');
    client.write('Hello Server!');
});

client.on('data', (data) => {
    console.log('Nhận từ server:', data.toString());
    client.destroy(); // Đóng kết nối
});

client.on('close', () => {
    console.log('Đã đóng kết nối');
});

client.on('error', (err) => {
    console.error('Client error:', err);
});
\`\`\`

## Multi-Client Server

\`\`\`javascript
const net = require('net');

const server = net.createServer((socket) => {
    const clientId = Math.random().toString(36).substr(2, 9);
    console.log(\`Client \${clientId} đã kết nối\`);
    
    socket.on('data', (data) => {
        const message = data.toString();
        console.log(\`[\${clientId}]: \${message}\`);
        socket.write(\`[\${clientId}] Echo: \${message}\`);
    });
    
    socket.on('end', () => {
        console.log(\`Client \${clientId} đã ngắt kết nối\`);
    });
});

server.listen(8080, () => {
    console.log('Multi-client TCP Server đang chạy');
});
\`\`\`

## Kinh nghiệm

- Node.js tự động xử lý nhiều connections
- Sử dụng events để xử lý data
- Luôn xử lý error events
- Buffer data nếu cần`,
    contentEn: `# TCP Socket with Node.js

Node.js provides \`net\` module to work with TCP sockets. Here's how to create server and client.

## TCP Server

\`\`\`javascript
const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected:', socket.remoteAddress);
    
    socket.on('data', (data) => {
        const message = data.toString();
        console.log('Received:', message);
        
        // Echo back to client
        socket.write('Server received: ' + message);
    });
    
    socket.on('end', () => {
        console.log('Client disconnected');
    });
    
    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });
});

server.listen(8080, () => {
    console.log('TCP Server running on port 8080');
});
\`\`\`

## TCP Client

\`\`\`javascript
const net = require('net');

const client = new net.Socket();

client.connect(8080, 'localhost', () => {
    console.log('Connected to server');
    client.write('Hello Server!');
});

client.on('data', (data) => {
    console.log('Received from server:', data.toString());
    client.destroy(); // Close connection
});

client.on('close', () => {
    console.log('Connection closed');
});

client.on('error', (err) => {
    console.error('Client error:', err);
});
\`\`\`

## Multi-Client Server

\`\`\`javascript
const net = require('net');

const server = net.createServer((socket) => {
    const clientId = Math.random().toString(36).substr(2, 9);
    console.log(\`Client \${clientId} connected\`);
    
    socket.on('data', (data) => {
        const message = data.toString();
        console.log(\`[\${clientId}]: \${message}\`);
        socket.write(\`[\${clientId}] Echo: \${message}\`);
    });
    
    socket.on('end', () => {
        console.log(\`Client \${clientId} disconnected\`);
    });
});

server.listen(8080, () => {
    console.log('Multi-client TCP Server running');
});
\`\`\`

## Experience

- Node.js automatically handles multiple connections
- Use events to handle data
- Always handle error events
- Buffer data if needed`,
    tags: ["JavaScript", "Node.js", "TCP", "Socket"],
  },
  {
    id: "8",
    title: "REST API với Express.js",
    titleEn: "REST API with Express.js",
    slug: "rest-api-expressjs",
    series: "javascript",
    date: "2024-02-20",
    readTime: 12,
    excerpt: "Học cách xây dựng REST API với Express.js và Node.js.",
    excerptEn: "Learn how to build REST API with Express.js and Node.js.",
    content: `# REST API với Express.js

Express.js là framework phổ biến nhất để xây dựng REST APIs với Node.js.

## Cài đặt

\`\`\`bash
npm init -y
npm install express
\`\`\`

## Basic Express Server

\`\`\`javascript
const express = require('express');
const app = express();

// Middleware để parse JSON
app.use(express.json());

// GET endpoint
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ]);
});

// GET by ID
app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json({ id, name: 'John' });
});

// POST endpoint
app.post('/api/users', (req, res) => {
    const { name } = req.body;
    const newUser = { id: Date.now(), name };
    res.status(201).json(newUser);
});

// PUT endpoint
app.put('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    res.json({ id, name });
});

// DELETE endpoint
app.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(\`Server đang chạy tại http://localhost:\${PORT}\`);
});
\`\`\`

## Middleware

\`\`\`javascript
// Custom middleware
const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.path}\`);
    next();
};

app.use(logger);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});
\`\`\`

## Kinh nghiệm

- Sử dụng middleware để xử lý common tasks
- Validate input data
- Xử lý errors đúng cách
- Sử dụng async/await với try-catch
- API versioning cho production`,
    contentEn: `# REST API with Express.js

Express.js is the most popular framework to build REST APIs with Node.js.

## Installation

\`\`\`bash
npm init -y
npm install express
\`\`\`

## Basic Express Server

\`\`\`javascript
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// GET endpoint
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ]);
});

// GET by ID
app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json({ id, name: 'John' });
});

// POST endpoint
app.post('/api/users', (req, res) => {
    const { name } = req.body;
    const newUser = { id: Date.now(), name };
    res.status(201).json(newUser);
});

// PUT endpoint
app.put('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    res.json({ id, name });
});

// DELETE endpoint
app.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(\`Server running at http://localhost:\${PORT}\`);
});
\`\`\`

## Middleware

\`\`\`javascript
// Custom middleware
const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.path}\`);
    next();
};

app.use(logger);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});
\`\`\`

## Experience

- Use middleware for common tasks
- Validate input data
- Handle errors properly
- Use async/await with try-catch
- API versioning for production`,
    tags: ["JavaScript", "Node.js", "Express", "REST API"],
  },
  {
    id: "9",
    title: "WebSocket với Node.js",
    titleEn: "WebSocket with Node.js",
    slug: "websocket-nodejs",
    series: "javascript",
    date: "2024-02-25",
    readTime: 10,
    excerpt: "Học cách sử dụng WebSocket để tạo real-time communication với Node.js.",
    excerptEn: "Learn how to use WebSocket to create real-time communication with Node.js.",
    content: `# WebSocket với Node.js

WebSocket cho phép giao tiếp hai chiều real-time giữa client và server.

## Cài đặt

\`\`\`bash
npm install ws
\`\`\`

## WebSocket Server

\`\`\`javascript
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client đã kết nối');
    
    // Gửi message đến client
    ws.send('Chào mừng đến với WebSocket Server!');
    
    // Nhận message từ client
    ws.on('message', (message) => {
        console.log('Nhận được:', message.toString());
        
        // Broadcast đến tất cả clients
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(\`Broadcast: \${message.toString()}\`);
            }
        });
    });
    
    ws.on('close', () => {
        console.log('Client đã ngắt kết nối');
    });
    
    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

console.log('WebSocket Server đang chạy tại ws://localhost:8080');
\`\`\`

## WebSocket Client (Browser)

\`\`\`javascript
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Đã kết nối đến WebSocket Server');
    ws.send('Hello Server!');
};

ws.onmessage = (event) => {
    console.log('Nhận được:', event.data);
};

ws.onerror = (error) => {
    console.error('WebSocket error:', error);
};

ws.onclose = () => {
    console.log('Đã đóng kết nối');
};
\`\`\`

## WebSocket Client (Node.js)

\`\`\`javascript
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Connected to WebSocket Server');
    ws.send('Hello from Node.js Client!');
});

ws.on('message', (data) => {
    console.log('Received:', data.toString());
});

ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

ws.on('close', () => {
    console.log('Connection closed');
});
\`\`\`

## Kinh nghiệm

- WebSocket phù hợp cho real-time apps
- Xử lý reconnection logic
- Sử dụng heartbeat để kiểm tra connection
- Validate messages từ client
- Rate limiting để tránh abuse`,
    contentEn: `# WebSocket with Node.js

WebSocket allows bidirectional real-time communication between client and server.

## Installation

\`\`\`bash
npm install ws
\`\`\`

## WebSocket Server

\`\`\`javascript
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');
    
    // Send message to client
    ws.send('Welcome to WebSocket Server!');
    
    // Receive message from client
    ws.on('message', (message) => {
        console.log('Received:', message.toString());
        
        // Broadcast to all clients
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(\`Broadcast: \${message.toString()}\`);
            }
        });
    });
    
    ws.on('close', () => {
        console.log('Client disconnected');
    });
    
    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

console.log('WebSocket Server running at ws://localhost:8080');
\`\`\`

## WebSocket Client (Browser)

\`\`\`javascript
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Connected to WebSocket Server');
    ws.send('Hello Server!');
};

ws.onmessage = (event) => {
    console.log('Received:', event.data);
};

ws.onerror = (error) => {
    console.error('WebSocket error:', error);
};

ws.onclose = () => {
    console.log('Connection closed');
};
\`\`\`

## WebSocket Client (Node.js)

\`\`\`javascript
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Connected to WebSocket Server');
    ws.send('Hello from Node.js Client!');
});

ws.on('message', (data) => {
    console.log('Received:', data.toString());
});

ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

ws.on('close', () => {
    console.log('Connection closed');
});
\`\`\`

## Experience

- WebSocket is great for real-time apps
- Handle reconnection logic
- Use heartbeat to check connection
- Validate messages from client
- Rate limiting to prevent abuse`,
    tags: ["JavaScript", "Node.js", "WebSocket"],
  },
  // Thêm bài viết Java
  {
    id: "10",
    title: "REST API với Spring Boot",
    titleEn: "REST API with Spring Boot",
    slug: "rest-api-spring-boot",
    series: "java",
    date: "2024-03-01",
    readTime: 12,
    excerpt: "Học cách xây dựng REST API với Spring Boot framework.",
    excerptEn: "Learn how to build REST API with Spring Boot framework.",
    content: `# REST API với Spring Boot

Spring Boot giúp xây dựng REST API nhanh chóng và dễ dàng hơn.

## Tạo Project

\`\`\`bash
spring init --dependencies=web,data-jpa,postgresql my-api
\`\`\`

## Controller cơ bản

\`\`\`java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.findById(id);
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
    
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.update(id, user);
    }
    
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.delete(id);
    }
}
\`\`\`

## Service Layer

\`\`\`java
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> findAll() {
        return userRepository.findAll();
    }
    
    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
    
    public User save(User user) {
        return userRepository.save(user);
    }
}
\`\`\`

## Kinh nghiệm

- Sử dụng DTO để tách biệt entity và API response
- Validate input data với @Valid
- Xử lý exceptions với @ControllerAdvice
- Sử dụng ResponseEntity cho status codes linh hoạt`,
    contentEn: `# REST API with Spring Boot

Spring Boot makes building REST APIs faster and easier.

## Create Project

\`\`\`bash
spring init --dependencies=web,data-jpa,postgresql my-api
\`\`\`

## Basic Controller

\`\`\`java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.findById(id);
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
    
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.update(id, user);
    }
    
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.delete(id);
    }
}
\`\`\`

## Service Layer

\`\`\`java
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> findAll() {
        return userRepository.findAll();
    }
    
    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
    
    public User save(User user) {
        return userRepository.save(user);
    }
}
\`\`\`

## Experience

- Use DTOs to separate entity and API response
- Validate input with @Valid
- Handle exceptions with @ControllerAdvice
- Use ResponseEntity for flexible status codes`,
    tags: ["Java", "Spring Boot", "REST API"],
  },
  {
    id: "11",
    title: "Xử lý JSON với Jackson trong Java",
    titleEn: "JSON Processing with Jackson in Java",
    slug: "json-jackson-java",
    series: "java",
    date: "2024-03-05",
    readTime: 8,
    excerpt: "Học cách xử lý JSON data với Jackson library trong Java.",
    excerptEn: "Learn how to process JSON data with Jackson library in Java.",
    content: `# Xử lý JSON với Jackson trong Java

Jackson là thư viện phổ biến nhất để xử lý JSON trong Java.

## Thêm Dependency

\`\`\`xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.2</version>
</dependency>
\`\`\`

## ObjectMapper cơ bản

\`\`\`java
import com.fasterxml.jackson.databind.ObjectMapper;

ObjectMapper mapper = new ObjectMapper();

// Object to JSON
User user = new User("John", 30);
String json = mapper.writeValueAsString(user);
// {"name":"John","age":30}

// JSON to Object
String json = "{\\"name\\":\\"John\\",\\"age\\":30}";
User user = mapper.readValue(json, User.class);
\`\`\`

## Xử lý List

\`\`\`java
// List to JSON
List<User> users = Arrays.asList(
    new User("John", 30),
    new User("Jane", 25)
);
String json = mapper.writeValueAsString(users);

// JSON to List
String json = "[{\\"name\\":\\"John\\"},{\\"name\\":\\"Jane\\"}]";
List<User> users = mapper.readValue(json, 
    new TypeReference<List<User>>() {});
\`\`\`

## Custom Serialization

\`\`\`java
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
private Date birthDate;

@JsonProperty("full_name")
private String fullName;
\`\`\`

## Kinh nghiệm

- Sử dụng ObjectMapper như singleton
- Xử lý exceptions khi parse JSON
- Sử dụng @JsonIgnore để bỏ qua fields
- Custom serializers cho complex objects`,
    contentEn: `# JSON Processing with Jackson in Java

Jackson is the most popular library for JSON processing in Java.

## Add Dependency

\`\`\`xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.2</version>
</dependency>
\`\`\`

## Basic ObjectMapper

\`\`\`java
import com.fasterxml.jackson.databind.ObjectMapper;

ObjectMapper mapper = new ObjectMapper();

// Object to JSON
User user = new User("John", 30);
String json = mapper.writeValueAsString(user);
// {"name":"John","age":30}

// JSON to Object
String json = "{\\"name\\":\\"John\\",\\"age\\":30}";
User user = mapper.readValue(json, User.class);
\`\`\`

## Handle Lists

\`\`\`java
// List to JSON
List<User> users = Arrays.asList(
    new User("John", 30),
    new User("Jane", 25)
);
String json = mapper.writeValueAsString(users);

// JSON to List
String json = "[{\\"name\\":\\"John\\"},{\\"name\\":\\"Jane\\"}]";
List<User> users = mapper.readValue(json, 
    new TypeReference<List<User>>() {});
\`\`\`

## Custom Serialization

\`\`\`java
@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
private Date birthDate;

@JsonProperty("full_name")
private String fullName;
\`\`\`

## Experience

- Use ObjectMapper as singleton
- Handle exceptions when parsing JSON
- Use @JsonIgnore to skip fields
- Custom serializers for complex objects`,
    tags: ["Java", "JSON", "Jackson"],
  },
  // Thêm bài viết JavaScript
  {
    id: "12",
    title: "Async/Await trong JavaScript",
    titleEn: "Async/Await in JavaScript",
    slug: "async-await-javascript",
    series: "javascript",
    date: "2024-03-10",
    readTime: 9,
    excerpt: "Học cách sử dụng async/await để xử lý asynchronous operations trong JavaScript.",
    excerptEn: "Learn how to use async/await to handle asynchronous operations in JavaScript.",
    content: `# Async/Await trong JavaScript

Async/await giúp code asynchronous dễ đọc và dễ hiểu hơn so với Promises.

## Cú pháp cơ bản

\`\`\`javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
\`\`\`

## So sánh với Promises

\`\`\`javascript
// Với Promises
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Với async/await
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

## Xử lý nhiều requests

\`\`\`javascript
async function fetchMultiple() {
    try {
        const [user, posts] = await Promise.all([
            fetch('/api/user').then(r => r.json()),
            fetch('/api/posts').then(r => r.json())
        ]);
        return { user, posts };
    } catch (error) {
        console.error('Error:', error);
    }
}
\`\`\`

## Trong Node.js

\`\`\`javascript
const fs = require('fs').promises;

async function readFile() {
    try {
        const data = await fs.readFile('file.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}
\`\`\`

## Kinh nghiệm

- Luôn dùng try-catch với async/await
- Sử dụng Promise.all cho parallel requests
- Tránh await trong loops, dùng Promise.all thay thế
- Async functions luôn return Promise`,
    contentEn: `# Async/Await in JavaScript

Async/await makes asynchronous code more readable and easier to understand than Promises.

## Basic Syntax

\`\`\`javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
\`\`\`

## Comparison with Promises

\`\`\`javascript
// With Promises
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// With async/await
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

## Handle Multiple Requests

\`\`\`javascript
async function fetchMultiple() {
    try {
        const [user, posts] = await Promise.all([
            fetch('/api/user').then(r => r.json()),
            fetch('/api/posts').then(r => r.json())
        ]);
        return { user, posts };
    } catch (error) {
        console.error('Error:', error);
    }
}
\`\`\`

## In Node.js

\`\`\`javascript
const fs = require('fs').promises;

async function readFile() {
    try {
        const data = await fs.readFile('file.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}
\`\`\`

## Experience

- Always use try-catch with async/await
- Use Promise.all for parallel requests
- Avoid await in loops, use Promise.all instead
- Async functions always return Promise`,
    tags: ["JavaScript", "Async", "Promises"],
  },
  {
    id: "13",
    title: "Middleware trong Express.js",
    titleEn: "Middleware in Express.js",
    slug: "middleware-expressjs",
    series: "javascript",
    date: "2024-03-15",
    readTime: 11,
    excerpt: "Tìm hiểu về middleware và cách sử dụng trong Express.js.",
    excerptEn: "Learn about middleware and how to use it in Express.js.",
    content: `# Middleware trong Express.js

Middleware là các functions có thể truy cập request, response và next function.

## Middleware cơ bản

\`\`\`javascript
const express = require('express');
const app = express();

// Custom middleware
const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.path}\`);
    next(); // Gọi next() để chuyển sang middleware tiếp theo
};

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello World');
});
\`\`\`

## Built-in Middleware

\`\`\`javascript
// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// CORS
const cors = require('cors');
app.use(cors());
\`\`\`

## Route-specific Middleware

\`\`\`javascript
const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

app.get('/api/protected', auth, (req, res) => {
    res.json({ message: 'Protected route' });
});
\`\`\`

## Error Handling Middleware

\`\`\`javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: err.message 
    });
});
\`\`\`

## Third-party Middleware

\`\`\`javascript
// Morgan - HTTP request logger
const morgan = require('morgan');
app.use(morgan('combined'));

// Helmet - Security headers
const helmet = require('helmet');
app.use(helmet());

// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);
\`\`\`

## Kinh nghiệm

- Middleware được thực thi theo thứ tự
- Luôn gọi next() trừ khi muốn dừng request
- Sử dụng middleware cho logging, authentication, validation
- Error handling middleware phải có 4 parameters`,
    contentEn: `# Middleware in Express.js

Middleware are functions that have access to request, response, and next function.

## Basic Middleware

\`\`\`javascript
const express = require('express');
const app = express();

// Custom middleware
const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.path}\`);
    next(); // Call next() to pass to next middleware
};

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello World');
});
\`\`\`

## Built-in Middleware

\`\`\`javascript
// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// CORS
const cors = require('cors');
app.use(cors());
\`\`\`

## Route-specific Middleware

\`\`\`javascript
const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

app.get('/api/protected', auth, (req, res) => {
    res.json({ message: 'Protected route' });
});
\`\`\`

## Error Handling Middleware

\`\`\`javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: err.message 
    });
});
\`\`\`

## Third-party Middleware

\`\`\`javascript
// Morgan - HTTP request logger
const morgan = require('morgan');
app.use(morgan('combined'));

// Helmet - Security headers
const helmet = require('helmet');
app.use(helmet());

// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);
\`\`\`

## Experience

- Middleware executes in order
- Always call next() unless you want to stop the request
- Use middleware for logging, authentication, validation
- Error handling middleware must have 4 parameters`,
    tags: ["JavaScript", "Node.js", "Express", "Middleware"],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getPostsBySeries(series: "java" | "javascript"): Post[] {
  return posts.filter((post) => post.series === series)
}

export function getAllPosts(): Post[] {
  return posts
}


