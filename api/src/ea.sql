--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: order_lines; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_lines (
    price integer,
    count integer DEFAULT 1 NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "orderId" integer NOT NULL,
    "productId" integer NOT NULL
);


ALTER TABLE public.order_lines OWNER TO postgres;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    price integer DEFAULT 0 NOT NULL,
    state character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: product_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_categories (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "categoryId" integer NOT NULL,
    "productId" integer NOT NULL
);


ALTER TABLE public.product_categories OWNER TO postgres;

--
-- Name: product_sugestion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_sugestion (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "sugestionId" integer NOT NULL,
    "productId" integer NOT NULL
);


ALTER TABLE public.product_sugestion OWNER TO postgres;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    price integer NOT NULL,
    stock integer NOT NULL,
    img character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: sugestions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sugestions (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.sugestions OWNER TO postgres;

--
-- Name: sugestions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sugestions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sugestions_id_seq OWNER TO postgres;

--
-- Name: sugestions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sugestions_id_seq OWNED BY public.sugestions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    lastname text NOT NULL,
    mail text NOT NULL,
    password text NOT NULL,
    "isAdmin" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: sugestions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sugestions ALTER COLUMN id SET DEFAULT nextval('public.sugestions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, "createdAt", "updatedAt") FROM stdin;
1	Iphone	2021-01-04 02:26:04.906-03	2021-01-04 02:26:04.906-03
2	Samsung	2021-01-04 02:26:11.092-03	2021-01-04 02:26:11.092-03
3	LG	2021-01-04 02:26:20.422-03	2021-01-04 02:26:20.422-03
4	Motorola	2021-01-04 02:26:25.493-03	2021-01-04 02:26:25.493-03
5	Asus	2021-01-04 02:26:29.827-03	2021-01-04 02:26:29.827-03
6	Xiaomi	2021-01-04 02:26:32.707-03	2021-01-04 02:26:32.707-03
7	Huawei	2021-01-04 02:26:38.725-03	2021-01-04 02:26:38.725-03
8	16gb	2021-01-04 02:27:08.888-03	2021-01-04 02:27:08.888-03
9	32gb	2021-01-04 02:27:12.292-03	2021-01-04 02:27:12.292-03
10	64gb	2021-01-04 02:27:15.455-03	2021-01-04 02:27:15.455-03
11	128gb	2021-01-04 02:27:17.876-03	2021-01-04 02:27:17.876-03
16	256gb	2021-01-04 02:28:29.443-03	2021-01-04 02:28:29.443-03
17	512gb	2021-01-04 02:28:32.658-03	2021-01-04 02:28:32.658-03
18	2gb Ram	2021-01-04 02:28:37.179-03	2021-01-04 02:28:37.179-03
19	4gb Ram	2021-01-04 02:28:40.114-03	2021-01-04 02:28:40.114-03
20	6gb Ram	2021-01-04 02:28:44.572-03	2021-01-04 02:28:44.572-03
21	8gb Ram	2021-01-04 02:28:47.129-03	2021-01-04 02:28:47.129-03
22	Oled Screen	2021-01-04 02:29:12.289-03	2021-01-04 02:29:12.289-03
23	Ips Screen	2021-01-04 02:29:18.496-03	2021-01-04 02:29:18.496-03
24	Google	2021-01-04 03:12:29.638-03	2021-01-04 03:12:29.638-03
\.


--
-- Data for Name: order_lines; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_lines (price, count, "createdAt", "updatedAt", "orderId", "productId") FROM stdin;
700	1	2021-01-04 03:08:20.773-03	2021-01-04 03:20:58.992-03	1	3
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, price, state, "createdAt", "updatedAt", "userId") FROM stdin;
1	700	cart	2021-01-04 03:08:20.747-03	2021-01-04 03:08:23.149-03	1
\.


--
-- Data for Name: product_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_categories ("createdAt", "updatedAt", "categoryId", "productId") FROM stdin;
2021-01-04 02:47:11.125-03	2021-01-04 02:47:11.125-03	9	1
2021-01-04 02:47:11.131-03	2021-01-04 02:47:11.131-03	18	1
2021-01-04 02:47:11.134-03	2021-01-04 02:47:11.134-03	1	1
2021-01-04 02:49:59.828-03	2021-01-04 02:49:59.828-03	2	2
2021-01-04 02:49:59.87-03	2021-01-04 02:49:59.87-03	19	2
2021-01-04 02:49:59.873-03	2021-01-04 02:49:59.873-03	10	2
2021-01-04 02:56:04.576-03	2021-01-04 02:56:04.576-03	1	3
2021-01-04 02:56:04.597-03	2021-01-04 02:56:04.597-03	11	3
2021-01-04 02:56:04.601-03	2021-01-04 02:56:04.601-03	22	3
2021-01-04 03:00:59.645-03	2021-01-04 03:00:59.645-03	2	4
2021-01-04 03:00:59.647-03	2021-01-04 03:00:59.647-03	11	4
2021-01-04 03:00:59.649-03	2021-01-04 03:00:59.649-03	20	4
2021-01-04 03:00:59.695-03	2021-01-04 03:00:59.695-03	22	4
2021-01-04 03:07:10.871-03	2021-01-04 03:07:10.871-03	10	5
2021-01-04 03:07:10.872-03	2021-01-04 03:07:10.872-03	18	5
2021-01-04 03:07:10.875-03	2021-01-04 03:07:10.875-03	23	5
2021-01-04 03:07:10.918-03	2021-01-04 03:07:10.918-03	1	5
2021-01-04 03:09:42.779-03	2021-01-04 03:09:42.779-03	6	6
2021-01-04 03:09:42.782-03	2021-01-04 03:09:42.782-03	20	6
2021-01-04 03:09:42.8-03	2021-01-04 03:09:42.8-03	11	6
2021-01-04 03:11:14.919-03	2021-01-04 03:11:14.919-03	2	7
2021-01-04 03:11:14.92-03	2021-01-04 03:11:14.92-03	11	7
2021-01-04 03:11:14.924-03	2021-01-04 03:11:14.924-03	20	7
2021-01-04 03:11:14.948-03	2021-01-04 03:11:14.948-03	22	7
2021-01-04 03:13:08.419-03	2021-01-04 03:13:08.419-03	11	8
2021-01-04 03:13:08.427-03	2021-01-04 03:13:08.427-03	20	8
2021-01-04 03:13:08.468-03	2021-01-04 03:13:08.468-03	22	8
2021-01-04 03:13:08.469-03	2021-01-04 03:13:08.469-03	24	8
2021-01-04 03:14:57.528-03	2021-01-04 03:14:57.528-03	1	9
2021-01-04 03:14:57.535-03	2021-01-04 03:14:57.535-03	19	9
2021-01-04 03:14:57.555-03	2021-01-04 03:14:57.555-03	10	9
2021-01-04 03:14:57.571-03	2021-01-04 03:14:57.571-03	22	9
2021-01-04 03:17:03.803-03	2021-01-04 03:17:03.803-03	1	10
2021-01-04 03:17:03.804-03	2021-01-04 03:17:03.804-03	18	10
2021-01-04 03:17:03.806-03	2021-01-04 03:17:03.806-03	23	10
2021-01-04 03:17:03.851-03	2021-01-04 03:17:03.851-03	8	10
2021-01-04 03:18:22.995-03	2021-01-04 03:18:22.995-03	6	11
2021-01-04 03:18:23.016-03	2021-01-04 03:18:23.016-03	10	11
2021-01-04 03:18:23.033-03	2021-01-04 03:18:23.033-03	19	11
2021-01-04 03:18:23.037-03	2021-01-04 03:18:23.037-03	23	11
2021-01-04 03:19:42.605-03	2021-01-04 03:19:42.605-03	3	12
2021-01-04 03:19:42.643-03	2021-01-04 03:19:42.643-03	11	12
2021-01-04 03:19:42.646-03	2021-01-04 03:19:42.646-03	20	12
2021-01-04 03:19:42.648-03	2021-01-04 03:19:42.648-03	22	12
\.


--
-- Data for Name: product_sugestion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_sugestion ("createdAt", "updatedAt", "sugestionId", "productId") FROM stdin;
2021-01-04 02:47:11.161-03	2021-01-04 02:47:11.161-03	7	1
2021-01-04 02:47:11.181-03	2021-01-04 02:47:11.181-03	1	1
2021-01-04 02:49:59.875-03	2021-01-04 02:49:59.875-03	3	2
2021-01-04 02:49:59.877-03	2021-01-04 02:49:59.877-03	7	2
2021-01-04 02:49:59.904-03	2021-01-04 02:49:59.904-03	6	2
2021-01-04 02:49:59.927-03	2021-01-04 02:49:59.927-03	9	2
2021-01-04 02:56:04.667-03	2021-01-04 02:56:04.667-03	5	3
2021-01-04 02:56:04.668-03	2021-01-04 02:56:04.668-03	7	3
2021-01-04 02:56:04.69-03	2021-01-04 02:56:04.69-03	9	3
2021-01-04 02:56:04.691-03	2021-01-04 02:56:04.691-03	6	3
2021-01-04 03:00:59.716-03	2021-01-04 03:00:59.716-03	4	4
2021-01-04 03:00:59.72-03	2021-01-04 03:00:59.72-03	7	4
2021-01-04 03:00:59.891-03	2021-01-04 03:00:59.891-03	6	4
2021-01-04 03:00:59.973-03	2021-01-04 03:00:59.973-03	9	4
2021-01-04 03:07:10.919-03	2021-01-04 03:07:10.919-03	2	5
2021-01-04 03:07:10.957-03	2021-01-04 03:07:10.957-03	6	5
2021-01-04 03:09:42.88-03	2021-01-04 03:09:42.88-03	2	6
2021-01-04 03:09:42.892-03	2021-01-04 03:09:42.892-03	8	6
2021-01-04 03:09:42.893-03	2021-01-04 03:09:42.893-03	9	6
2021-01-04 03:09:42.894-03	2021-01-04 03:09:42.894-03	7	6
2021-01-04 03:09:42.895-03	2021-01-04 03:09:42.895-03	6	6
2021-01-04 03:11:14.952-03	2021-01-04 03:11:14.952-03	4	7
2021-01-04 03:11:14.973-03	2021-01-04 03:11:14.973-03	9	7
2021-01-04 03:11:15.015-03	2021-01-04 03:11:15.015-03	8	7
2021-01-04 03:11:15.017-03	2021-01-04 03:11:15.017-03	7	7
2021-01-04 03:11:15.035-03	2021-01-04 03:11:15.035-03	6	7
2021-01-04 03:13:08.47-03	2021-01-04 03:13:08.47-03	7	8
2021-01-04 03:13:08.472-03	2021-01-04 03:13:08.472-03	9	8
2021-01-04 03:13:08.504-03	2021-01-04 03:13:08.504-03	5	8
2021-01-04 03:14:57.573-03	2021-01-04 03:14:57.573-03	3	9
2021-01-04 03:14:57.574-03	2021-01-04 03:14:57.574-03	7	9
2021-01-04 03:14:57.685-03	2021-01-04 03:14:57.685-03	6	9
2021-01-04 03:17:03.87-03	2021-01-04 03:17:03.87-03	1	10
2021-01-04 03:18:23.038-03	2021-01-04 03:18:23.038-03	1	11
2021-01-04 03:18:23.039-03	2021-01-04 03:18:23.039-03	7	11
2021-01-04 03:18:23.04-03	2021-01-04 03:18:23.04-03	8	11
2021-01-04 03:19:42.649-03	2021-01-04 03:19:42.649-03	6	12
2021-01-04 03:19:42.657-03	2021-01-04 03:19:42.657-03	4	12
2021-01-04 03:19:42.684-03	2021-01-04 03:19:42.684-03	9	12
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, description, price, stock, img, "createdAt", "updatedAt") FROM stdin;
3	Iphone 12	None	700	100	https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12/Blue/Apple-iPhone-12-Blue-frontimage.png	2021-01-04 02:56:04.39-03	2021-01-04 02:56:04.39-03
1	Iphone 7	None	186	20	https://i5.walmartimages.com/asr/8ddb368d-c2b9-4138-841b-247a6857e722_1.7ce0f921a93253b7e37f5ed875aa3914.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff	2021-01-04 02:47:10.925-03	2021-01-04 02:57:49.912-03
2	S9	None	313	30	https://i5.walmartimages.com/asr/92e110ab-d095-474d-8d59-5a4ba4754faf.ee6720676be7e6c330746051e9fe8ff8.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff	2021-01-04 02:49:59.67-03	2021-01-04 02:59:48.871-03
4	S10	none	560	30	https://target.scene7.com/is/image/Target/GUEST_32930e63-dd0c-49c9-82ee-c2db67291e9e?fmt=webp&wid=1400&qlt=80	2021-01-04 03:00:59.467-03	2021-01-04 03:04:16.667-03
5	Iphone 8	64gb 2gb ram	280	20	https://i5.walmartimages.com/asr/eff6132d-11d3-40dc-8928-3d3cdaa4b4e8_1.28a61d964a86914d257a1012186727c3.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff	2021-01-04 03:07:10.702-03	2021-01-04 03:07:10.702-03
6	Poco X3	6gb 128gb	243	50	https://cdn-files.kimovil.com/default/0005/14/thumb_413249_default_big.jpeg	2021-01-04 03:09:42.623-03	2021-01-04 03:09:42.623-03
7	s20 Fe	6gb 128gb	669	20	https://cdn-files.kimovil.com/phone_front/0005/20/thumb_419932_phone_front_big.jpeg	2021-01-04 03:11:14.752-03	2021-01-04 03:11:14.752-03
8	Pixel 5	6gb 128gb	800	20	https://cdn-files.kimovil.com/phone_front/0005/21/thumb_420538_phone_front_big.jpeg	2021-01-04 03:13:08.265-03	2021-01-04 03:13:08.265-03
9	Iphone x	3gb 64gb	380	20	https://cdn-files.kimovil.com/phone_front/0001/88/thumb_87957_phone_front_big.jpeg	2021-01-04 03:14:57.369-03	2021-01-04 03:14:57.369-03
10	Iphone 6s	2gb 16gb	180	30	https://cdn-files.kimovil.com/phone_front/0001/06/thumb_5508_phone_front_big.jpeg	2021-01-04 03:17:03.595-03	2021-01-04 03:17:03.595-03
11	Redmi Note 9S	4gb 64gb	180	54	https://cdn-files.kimovil.com/default/0004/36/thumb_335718_default_big.jpeg	2021-01-04 03:18:22.831-03	2021-01-04 03:18:22.831-03
12	Lg Velvet	6gb 128gb	551	10	https://cdn-files.kimovil.com/phone_front/0004/58/thumb_357302_phone_front_big.jpeg	2021-01-04 03:19:42.452-03	2021-01-04 03:19:42.452-03
\.


--
-- Data for Name: sugestions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sugestions (id, name, "createdAt", "updatedAt") FROM stdin;
1	$100-$200	2021-01-04 02:29:37.729-03	2021-01-04 02:29:37.729-03
2	$200-$300	2021-01-04 02:29:42.55-03	2021-01-04 02:29:42.55-03
3	$300-$500	2021-01-04 02:29:45.912-03	2021-01-04 02:29:45.912-03
4	$500-$700	2021-01-04 02:29:48.526-03	2021-01-04 02:29:48.526-03
5	+$700	2021-01-04 02:29:52.727-03	2021-01-04 02:29:52.727-03
6	For Gaming/Heavy tasks	2021-01-04 02:30:27.598-03	2021-01-04 02:30:27.598-03
7	Best Camera	2021-01-04 02:30:34.822-03	2021-01-04 02:30:34.822-03
8	Battery Life	2021-01-04 02:30:54.949-03	2021-01-04 02:30:54.949-03
9	Best Screen	2021-01-04 02:31:27.855-03	2021-01-04 02:31:27.855-03
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, lastname, mail, password, "isAdmin", "createdAt", "updatedAt") FROM stdin;
1	Nicolas	Valencia	nicovalencia@gmail.com	123456789	f	2021-01-04 03:08:06.433-03	2021-01-04 03:08:06.433-03
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 24, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 1, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 12, true);


--
-- Name: sugestions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sugestions_id_seq', 9, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: order_lines order_lines_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_lines
    ADD CONSTRAINT order_lines_pkey PRIMARY KEY ("orderId", "productId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: product_categories product_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT product_categories_pkey PRIMARY KEY ("categoryId", "productId");


--
-- Name: product_sugestion product_sugestion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_sugestion
    ADD CONSTRAINT product_sugestion_pkey PRIMARY KEY ("sugestionId", "productId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: sugestions sugestions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sugestions
    ADD CONSTRAINT sugestions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: order_lines order_lines_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_lines
    ADD CONSTRAINT "order_lines_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public.orders(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: order_lines order_lines_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_lines
    ADD CONSTRAINT "order_lines_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders orders_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: product_categories product_categories_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT "product_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: product_categories product_categories_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT "product_categories_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: product_sugestion product_sugestion_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_sugestion
    ADD CONSTRAINT "product_sugestion_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: product_sugestion product_sugestion_sugestionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_sugestion
    ADD CONSTRAINT "product_sugestion_sugestionId_fkey" FOREIGN KEY ("sugestionId") REFERENCES public.sugestions(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

